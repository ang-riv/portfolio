import React, { useRef, useEffect, useState, useCallback } from "react";
import useWindowSize from "../useWindowSize";
import { useAnimation, motion, useInView } from "framer-motion";
import {
  desktopPieces,
  newDesktopPieces,
  mobilePieces,
} from "../../utils/imgData";
import { directProps, specificProps } from "../../utils/puzzleUtils";
import RenderPieces from "./PuzzleComponents/RenderPieces";

// desktop + tablet puzzle in skill section
const SkillsPuzzle = () => {
  // container div ref
  const ref = useRef(null);
  const pieceRef = useRef(null);
  const controls = useRef([
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ]).current;
  const isInView = useInView(ref, {
    threshold: 1.0,
    margin: "-40% 0px",
  });
  const [width, setWidth] = useState(null);

  //** DISTANCE + MOVEMENT
  // 125 = original width of the puzzle piece image
  // 25 = original distance between
  const originalWidth = 125;
  const originalDistance = 25;
  const divisor = (width / originalWidth).toFixed(5);
  const distance = (originalDistance * divisor).toFixed(5);

  // random direction to rotate the piece
  const randomNum = () => {
    return Math.floor(Math.random() * 361);
  };

  const variants = {
    start: { x: 0, rotate: 0, transition: { duration: 0.5 } },
    reset: { x: 0 },
  };

  const runAnimations = useCallback(async () => {
    // rotate to the correct position
    for (let i = 0; i < controls.length; i++) {
      await controls[i].start("start");
    }

    // find distance
    if (pieceRef.current) {
      let piece = pieceRef.current.getBoundingClientRect();
      setWidth(piece.width.toFixed(2));
    }

    // move horizontally
    for (let i = 1; i < controls.length; i++) {
      await controls[i].start({ x: i * distance });
    }

    // move to center
    for (let i = 0; i < controls.length; i++) {
      let movement = 0;
      if (i > 0) {
        movement = i * distance - distance * 2;
      } else if (i === 0) {
        movement = -distance * 2;
      }
      controls[i].start({
        x: movement,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, distance]);

  const resetAnimations = useCallback(async () => {
    for (let i = 0; i < controls.length; i++) {
      controls[i].start("reset");
    }

    for (let i = 0; i < controls.length; i++) {
      controls[i].start({
        rotate: randomNum(),
        transition: { duration: 0.5 },
      });
    }
    setWidth(0);
  }, [controls]);

  useEffect(() => {
    if (isInView) {
      runAnimations();
    } else {
      resetAnimations();
    }
  }, [isInView, distance, runAnimations, resetAnimations]);

  const directProps = {
    initial: { rotate: randomNum() },
    variants: variants,
    viewport: { root: ref },
  };

  return (
    <div className="skill-desktop-div center-flex" ref={ref}>
      <RenderPieces
        directProps={directProps}
        specificProps={specificProps(desktopPieces, false, controls, pieceRef)}
      />
    </div>
  );
};

const MobileSkillsPuzzle = () => {
  const prevDistance = useRef(null);
  const containerRef = useRef(null);
  const topPiece = useRef(null);
  const botPiece = useRef(null);
  const controls = useRef([
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ]).current;

  // top puzzle piece
  const [top, setTop] = useState(0);
  const [distance, setDistance] = useState(0);

  // make sure that the container is in the middle of the viewport
  const isInView = useInView(containerRef, { margin: "-50% -50% -50% -50%" });

  //** MOVEMENT
  const yMovement = distance;
  const xMovement = distance * 2;
  const variants = {
    down: { y: yMovement, transition: { duration: 0.5 } },
    up: { y: -yMovement, transition: { duration: 0.5 } },
    right: { x: -xMovement, transition: { duration: 0.5 } },
    left: { x: xMovement, transition: { duration: 0.5 } },
    reset: { x: 0, y: 0 },
  };

  const runAnimations = useCallback(async () => {
    // x movement
    // if it's the first piece, or the third piece, move right
    for (let i = 0; i < controls.length; i++) {
      if (i === 0 || i === 3) await controls[i].start("left");
      else if (i === 2 || i === 5) await controls[i].start("right");
    }

    // y movement
    for (let i = 0; i < controls.length; i++) {
      if (i === 0 || i === 1 || i === 2) controls[i].start("down");
      else controls[i].start("up");
    }
  }, [controls]);

  const resetAnimations = useCallback(async () => {
    for (let i = 0; i < controls.length; i++) {
      controls[i].start("reset");
    }
  }, [controls]);

  const findDistance = useCallback(() => {
    if (topPiece.current && containerRef.current) {
      const piece = topPiece.current.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;

      // position of the container plus how far down the user has scrolled
      const piecePosition = piece.bottom + scrollTop;

      // bottom of first puzzle piece
      setTop(piecePosition.toFixed(2));

      // calculating the distance
      const decrease = 150 - piece.width;
      const newDistance = Math.round(25 - 25 * (decrease / 150));

      if (newDistance !== prevDistance.current) {
        setDistance(newDistance);
        prevDistance.current = newDistance;
      }
    }
  }, []);

  useEffect(() => {
    //** animations on scroll
    let timeoutId;

    if (isInView) {
      if (distance < 10 || distance >= 100) {
        findDistance();
      }
      timeoutId = setTimeout(() => {
        runAnimations();
      }, 600);
    } else {
      resetAnimations();
    }

    return () => clearTimeout(timeoutId);
  }, [isInView, distance, top, runAnimations, resetAnimations, findDistance]);

  return (
    <>
      <motion.div className="skill-mobile-div center-flex" ref={containerRef}>
        <RenderPieces
          directProps={directProps("mobile-piece", variants)}
          specificProps={specificProps(mobilePieces, true, controls, {
            topRef: topPiece,
            botRef: botPiece,
          })}
        />
      </motion.div>
    </>
  );
};

const NewSkillsPuzzle = () => {
  const topPieces = [
    newDesktopPieces.html,
    newDesktopPieces.css,
    newDesktopPieces.javascript,
    newDesktopPieces.react,
  ];
  const botPieces = [
    newDesktopPieces.bootstrap,
    newDesktopPieces.tailwind,
    newDesktopPieces.api,
    newDesktopPieces.github,
  ];
  const topPiece = useRef(null);
  const botPiece = useRef(null);
  const topControls = useRef([
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ]).current;
  const botControls = useRef([
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ]).current;
  const [width, setWidth] = useState(null);
  const [verticalDistance, setVerticalDistance] = useState(null);

  const originalWidth = 300;
  const originalDistance = 51;
  const divisor = (width / originalWidth).toFixed(5);
  const distance = Number((originalDistance * divisor).toFixed(5));
  const v = distance + Number(verticalDistance / 2);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-50% -50% -50% -50%" });
  let testAnimations = true;
  const runAnimations = async () => {
    console.log("Distance", distance);
    console.log("v Distance", verticalDistance);

    const variants = {
      outerFirstL: { x: distance * 2, transition: { delay: 0.5 } },
      outerFirstR: { x: -distance * 2, transition: { delay: 0.5 } },
      outerSecondL: { x: distance * 3, transition: { delay: 0.5 } },
      innerSecondL: { x: distance, transition: { delay: 0.5 } },
      innerSecondR: { x: -distance, transition: { delay: 0.5 } },
      outerSecondR: { x: -distance * 3, transition: { delay: 0.5 } },
      topRow: { y: -v, transition: { delay: 0.5 } },
      bottomRow: { y: v, transition: { delay: 0.5 } },
      reset: {
        x: 0,
        y: 0,
        rotate: 0,
        transition: { delay: 0.3, duration: 0.5 },
      },
    };

    // move outer pieces
    const firstPhase = async () => {
      let pieces = [];
      for (let i = 0; i < topControls.length; i++) {
        const top = topControls[i];
        const bot = botControls[i];

        if (i === 0) {
          pieces.push(top.start(variants.outerFirstL));
          pieces.push(bot.start(variants.outerFirstL));
        } else if (i === 3) {
          pieces.push(top.start(variants.outerFirstR));
          pieces.push(bot.start(variants.outerFirstR));
        }
      }
      await Promise.all(pieces);
    };

    // chain together in groups
    const secondPhase = async () => {
      let pieces = [];
      for (let i = 0; i < topControls.length; i++) {
        const top = topControls[i];
        const bot = botControls[i];

        switch (i) {
          case 0:
            pieces.push(top.start(variants.outerSecondL));
            pieces.push(bot.start(variants.outerSecondL));
            break;
          case 1:
            pieces.push(top.start(variants.innerSecondL));
            pieces.push(bot.start(variants.innerSecondL));
            break;
          case 3:
            pieces.push(top.start(variants.outerSecondR));
            pieces.push(bot.start(variants.outerSecondR));
            break;
          case 2:
            pieces.push(top.start(variants.innerSecondR));
            pieces.push(bot.start(variants.innerSecondR));
            break;
          default:
            console.log("Unknown number");
        }
      }
      await Promise.all(pieces);
    };

    // vertical join
    const thirdPhase = async () => {
      let pieces = [];

      for (let i = 0; i < topControls.length; i++) {
        const top = topControls[i];
        const bot = botControls[i];
        pieces.push(top.start(variants.bottomRow));
        pieces.push(bot.start(variants.topRow));
      }
      await Promise.all(pieces);
    };
    await firstPhase();
    await secondPhase();
    await thirdPhase();
    testAnimations = false;
  };
  // check if inView
  useEffect(() => {
    if (topPiece.current) {
      let top = topPiece.current.getBoundingClientRect();
      let bot = botPiece.current.getBoundingClientRect();
      setWidth(top.width.toFixed(2));
      if (botPiece.current) {
        const vDistance = bot.top.toFixed(2) - top.bottom.toFixed(2);
        setVerticalDistance(vDistance.toFixed(2));
        console.log(bot.top.toFixed(2), top.bottom.toFixed(2));
      }
    }
    if (isInView) {
      runAnimations();
    }
    console.log(width);
  }, [topControls, botControls, distance, isInView]);
  return (
    <div
      ref={containerRef}
      style={{
        border: "1px solid green",
        height: "fit",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: "fit" }}>
        {topControls.map((_, index) => {
          if (index === 0) {
            return (
              <motion.img
                src={topPieces[index]}
                style={{ height: "100px", width: "100px" }}
                ref={topPiece}
                animate={topControls[index]}
              />
            );
          } else {
            return (
              <motion.img
                src={topPieces[index]}
                style={{ height: "100px", width: "100px" }}
                animate={topControls[index]}
              />
            );
          }
        })}
      </div>
      <div style={{ height: "fit" }}>
        {botControls.map((_, index) => {
          if (index === 0) {
            return (
              <motion.img
                src={botPieces[index]}
                style={{ height: "100px", width: "100px" }}
                ref={botPiece}
                animate={botControls[index]}
              />
            );
          } else {
            return (
              <motion.img
                src={botPieces[index]}
                style={{ height: "100px", width: "100px" }}
                animate={botControls[index]}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
/* will render one of two puzzles depending on the screen size */
const SkillsSectionPuzzle = () => {
  const size = useWindowSize();
  if (size.width < 700) {
    // mobile size
    return (
      <>
        <MobileSkillsPuzzle />
      </>
    );
  } else {
    return (
      <>
        <NewSkillsPuzzle />
      </>
    );
  }
};

export default SkillsSectionPuzzle;
