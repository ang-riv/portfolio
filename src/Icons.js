import React, { useRef, useEffect, useState, useCallback } from "react";
import useWindowSize from "./useWindowSize";
import { useAnimation, motion, useInView } from "framer-motion";
// svgs for puzzle pieces
import { introPieces, desktopPieces, mobilePieces } from "./Imports";

/**** INTRO SECTION ****/

// 2x2 puzzle in introSection
export function IntroPuzzle() {
  // container for puzzle
  const containerRef = useRef(null);
  const prevDistance = useRef(null);
  // make sure that the container is in the middle of the viewport
  const isInView = useInView(containerRef, { margin: "-50% -50% -50% -50%" });

  const controls = useRef([
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ]).current;
  // top puzzle piece
  const topRef = useRef(null);
  const [top, setTop] = useState(null);

  // amount needed for each piece to move vertically and join together
  const [distance, setDistance] = useState(0);
  const [puzzleGap, setPuzzleGap] = useState(0);

  // adds 50 due to original puzzle piece's jutted out piece is 50px
  const yMovement = Number(distance + puzzleGap);
  const xMovement = Number(puzzleGap);
  const variants = {
    even: { y: -yMovement, transition: { duration: 0.5 } },
    odd: { y: yMovement, transition: { duration: 0.5 } },
    left: { x: -xMovement, transition: { duration: 0.5 } },
    right: { x: xMovement, transition: { duration: 0.5 } },
    reset: { x: 0, y: 0 },
  };

  //** calculates distance/position pieces need to move and join
  const findDistance = useCallback(() => {
    if (topRef.current && containerRef.current) {
      const topPiece = topRef.current.getBoundingClientRect();
      const container = containerRef.current.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;

      // position of the container plus how far down the user has scrolled to get it's exact position
      const containerTop = container.top + scrollTop;
      const containerBottom = container.bottom + scrollTop;
      const midpoint = (containerTop + containerBottom) / 2;
      const piecePosition = topPiece.bottom + scrollTop;

      // figuring out the size of the piece of the puzzle that is sticking out using the original img sizes
      const multiplier = topPiece.width / 200;
      const gap = (50 * multiplier).toFixed(2);
      // bottom of first puzzle piece
      setTop(piecePosition.toFixed(2));
      setPuzzleGap(gap);

      // target place where pieces need to move to + distance needed
      //const newDistance = Math.round(midpoint - top);
      /*
      console.log("ran once");

      if (newDistance !== prevDistance.current) {
        setDistance(newDistance);
        prevDistance.current = newDistance;
        console.log("distance changed, ran logic");
      } else {
        console.log("distance is the same, skipped");
      }
        */
    }
  }, [top]);

  //*** puzzle animations
  //* joins pieces together
  const runAnimations = useCallback(async () => {
    // y movement
    for (let i = 0; i < controls.length; i++) {
      if (i === 0 || i === 1) await controls[i].start("odd");
      else await controls[i].start("even");
    }

    // x movement
    for (let i = 0; i < controls.length; i++) {
      if (i === 0 || i === 2) controls[i].start("right");
      else controls[i].start("left");
    }
  }, [controls]);

  //* return to original positions
  const resetAnimations = useCallback(async () => {
    for (let i = 0; i < controls.length; i++) {
      controls[i].start("reset");
    }
  }, [controls]);

  useEffect(() => {
    // puzzle animations on scroll
    if (isInView) {
      findDistance();
      // maybe get rid of this
      setTimeout(() => {
        runAnimations();
      }, 500);
    } else {
      resetAnimations();
    }
  }, [isInView, distance, top, findDistance, runAnimations, resetAnimations]);

  //** rendering puzzle pieces
  const puzzleImgs = [];
  // to account for 0 index
  let countUp = -1;

  for (const [key, value] of Object.entries(introPieces)) {
    const word = "puzzle piece";
    countUp++;

    // attaching ref to only the first piece for calculates
    const singlePieceRef = () => {
      if (key === "pinkPiece") return { ref: topRef };
    };

    puzzleImgs.push(
      <>
        <motion.img
          src={value}
          key={key}
          alt={word}
          className="intro-piece"
          variants={variants}
          {...singlePieceRef()}
          animate={controls[countUp]}
        ></motion.img>
      </>
    );
  }
  return (
    <figure className="intro-puzzle-container" ref={containerRef}>
      {puzzleImgs}
    </figure>
  );
}

/**** SKILLS SECTION ****/
// puzzle in skill section
export function SkillsPuzzle() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 1.0,
    margin: "-40% 0px",
  });

  const controls = useRef([
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ]).current;
  const centerRef = useRef(null);
  const [width, setWidth] = useState(null);

  // 125 is the originalwidth of the puzzle piece image and 25 is the original distance between them
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

  useEffect(() => {
    // move the pieces
    const runAnimations = async (controlsArr) => {
      let rect = 0;
      // rotate to correct position first
      for (let i = 0; i < controlsArr.length; i++) {
        await controlsArr[i].start("start");
      }

      // calculate distance
      if (centerRef.current) {
        rect = centerRef.current.getBoundingClientRect();
        setWidth(rect.width.toFixed(2));
      }

      // then move
      for (let i = 1; i < controlsArr.length; i++) {
        await controlsArr[i].start({
          x: i * distance,
        });
      }

      // then move to the center
      for (let i = 0; i < controlsArr.length; i++) {
        let holder = 0;
        if (i > 0) {
          holder = i * distance - distance * 2;
        } else if (i === 0) {
          holder = -distance * 2;
        }
        controlsArr[i].start({
          x: holder,
          transition: { duration: 0.5 },
        });
      }
    };

    // reset pieces
    const resetAnimations = async (controlsArr) => {
      for (let i = 0; i < controlsArr.length; i++) {
        controlsArr[i].start("reset");
      }

      for (let i = 0; i < controlsArr.length; i++) {
        controlsArr[i].start({
          rotate: randomNum(),
          transition: { duration: 0.5 },
        });
      }
      setWidth(0);
    };
    if (isInView) {
      runAnimations(controls);
    } else {
      resetAnimations(controls);
    }
  }, [isInView, distance]); // eslint-disable-line react-hooks/exhaustive-deps

  // condensing imgs
  const imgArr = [];
  let counter = Object.keys(desktopPieces).length;

  for (const [key, value] of Object.entries(desktopPieces)) {
    const word = "puzzle piece with the word " + key;
    counter--;
    imgArr.push(
      <>
        <motion.img
          src={value}
          alt={word}
          initial={{ rotate: randomNum() }}
          variants={variants}
          viewport={{ root: ref }}
          ref={centerRef}
          animate={controls[counter]}
        ></motion.img>
      </>
    );
  }

  return (
    <div className="skill-desktop-div" ref={ref}>
      {imgArr}
    </div>
  );
}

export function MobileSkillsPuzzle() {
  // container for puzzle
  const prevDistance = useRef(null);
  const containerRef = useRef(null);
  // make sure that the container is in the middle of the viewport
  const isInView = useInView(containerRef, { margin: "-50% -50% -50% -50%" });
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

  const yMovement = distance;
  const xMovement = distance * 2;
  const topPiece = useRef(null);
  const botPiece = useRef(null);

  const variants = {
    down: { y: yMovement, transition: { duration: 0.5 } },
    up: { y: -yMovement, transition: { duration: 0.5 } },
    right: { x: -xMovement, transition: { duration: 0.5 } },
    left: { x: xMovement, transition: { duration: 0.5 } },
    reset: { x: 0, y: 0 },
  };
  //* joins pieces together
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
      const rect = topPiece.current.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;

      // position of the container plus how far down the user has scrolled to get it's exact position
      const piecePosition = rect.bottom + scrollTop;

      // bottom of first puzzle piece
      setTop(piecePosition.toFixed(2));

      // calculating the distance needed
      const decrease = 150 - rect.width;
      const newDistance = Math.round(25 - 25 * (decrease / 150));

      if (newDistance !== prevDistance.current) {
        setDistance(newDistance);
        prevDistance.current = newDistance;
        //console.log("distance changed, ran logic");
      } else {
        //console.log("distance is the same, skipped");
      }
    }
  }, [top, distance]);

  useEffect(() => {
    //** calculates distance/position pieces need to move and join
    //*** puzzle animations
    // checks to see if the window has been resized, distance might change if it doe
    // puzzle animations on scroll

    if (isInView) {
      if (distance < 10 || distance >= 100) {
        findDistance();
      }
      setTimeout(() => {
        runAnimations();
      }, 500);
    } else {
      resetAnimations();
    }
  }, [isInView, distance, top, runAnimations, resetAnimations, findDistance]);

  //** rendering puzzle pieces
  const puzzleImgs = [];
  // to account for 0 index
  let countUp = -1;

  for (const [key, value] of Object.entries(mobilePieces)) {
    const word = "puzzle piece";
    countUp++;

    // attaching ref to only the first piece for calculates
    const singlePieceRef = () => {
      if (key === "css") return { ref: topPiece };
      else if (key === "react") return { ref: botPiece };
    };

    puzzleImgs.push(
      <motion.img
        src={value}
        alt={word}
        className="mobile-piece"
        variants={variants}
        {...singlePieceRef()}
        animate={controls[countUp]}
      ></motion.img>
    );
  }
  return (
    <>
      <motion.div className="skill-mobile-div" ref={containerRef}>
        {puzzleImgs}
      </motion.div>
    </>
  );
}

/* will render one of the puzzles depending on the screen size */
export function SkillsSectionPuzzle() {
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
}
