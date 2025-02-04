import React, { useRef, useEffect, useState, useCallback } from "react";
import useWindowSize from "../useWindowSize";
import { useAnimation, motion, useInView } from "framer-motion";
// svgs for puzzle pieces
import { desktopPieces, mobilePieces } from "../../Imports";
import { directProps, specificProps } from "../../utils/puzzleUtils";
import RenderPieces from "./PuzzleComponents/RenderPieces";

// desktop + tablet puzzle in skill section
const SkillsPuzzle = () => {
  // container div ref
  const ref = useRef(null);
  // piece ref
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

  //** distance + movement
  // 125 is the original width of the puzzle piece image and 25 is the original distance between them
  const originalWidth = 125;
  const originalDistance = 25;
  const divisor = (width / originalWidth).toFixed(5);
  const distance = (originalDistance * divisor).toFixed(5);

  // create a random direction to rotate the piece
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

    // then move to center
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

  // doesn't fit the same props as directProps() so made it it's own seperate object
  const directProps = {
    initial: { rotate: randomNum() },
    variants: variants,
    viewport: { root: ref },
  };

  return (
    <div className="skill-desktop-div" ref={ref}>
      <RenderPieces
        directProps={directProps}
        specificProps={specificProps(desktopPieces, false, controls, pieceRef)}
      />
    </div>
  );
};

const MobileSkillsPuzzle = () => {
  // container for puzzle
  const prevDistance = useRef(null);
  const containerRef = useRef(null);
  // puzzle pieces
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
  // amount needed for each piece to move vertically and join together
  const [distance, setDistance] = useState(0);

  // make sure that the container is in the middle of the viewport
  const isInView = useInView(containerRef, { margin: "-50% -50% -50% -50%" });

  //** movement
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

  //* return to original positions
  const resetAnimations = useCallback(async () => {
    for (let i = 0; i < controls.length; i++) {
      controls[i].start("reset");
    }
  }, [controls]);

  const findDistance = useCallback(() => {
    if (topPiece.current && containerRef.current) {
      const piece = topPiece.current.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;

      // position of the container plus how far down the user has scrolled to get it's exact position
      const piecePosition = piece.bottom + scrollTop;

      // bottom of first puzzle piece
      setTop(piecePosition.toFixed(2));

      // calculating the distance needed
      const decrease = 150 - piece.width;
      const newDistance = Math.round(25 - 25 * (decrease / 150));

      if (newDistance !== prevDistance.current) {
        setDistance(newDistance);
        prevDistance.current = newDistance;
      }
    }
  }, []);

  useEffect(() => {
    //** calculates distance/position pieces need to move and join
    //*** puzzle animations
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
      <motion.div className="skill-mobile-div" ref={containerRef}>
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

/* will render one of the puzzles depending on the screen size */
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
        <SkillsPuzzle />
      </>
    );
  }
};

export default SkillsSectionPuzzle;
