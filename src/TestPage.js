import React, { useRef, useState, useEffect } from "react";
import { useInView, motion, useAnimation } from "framer-motion";
import { mobilePieces } from "./Imports";
import { SocialLinks } from "./Icons";

const TestPage = () => {
  const titleRef = useRef(null);
  // container for puzzle
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
  const [top, setTop] = useState(null);
  const [midpoint, setMidpoint] = useState(null);

  // container for pieces/content-wrapper
  const [containerBot, setContainerBot] = useState(null);
  const [containerTop, setContainerTop] = useState(null);

  // amount needed for each piece to move vertically and join together
  const [distance, setDistance] = useState(0);

  // adds 50 due to original puzzle piece's jutted out piece is 50px
  const yMovement = Number(distance + 25);

  const topPiece = useRef(null);
  const botPiece = useRef(null);

  const variants = {
    down: { y: yMovement, transition: { duration: 0.5 } },
    up: { y: -yMovement, transition: { duration: 0.5 } },
    right: { x: -50, transition: { duration: 0.5 } },
    left: { x: 50, transition: { duration: 0.5 } },
    reset: { x: 0, y: 0 },
  };

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
        runAnimations(controls);
      }, 500);
    } else {
      resetAnimations(controls);
    }
  }, [isInView, distance, top]); // eslint-disable-line react-hooks/exhaustive-deps

  const findDistance = () => {
    if (topPiece.current && containerRef.current) {
      const rect1 = topPiece.current.getBoundingClientRect();
      const container = containerRef.current.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;

      // position of the container plus how far down the user has scrolled to get it's exact position
      const containerTop = container.top + scrollTop;
      const containerBottom = container.bottom + scrollTop;
      const midpoint = (containerTop + containerBottom) / 2;
      const piecePosition = rect1.bottom + scrollTop;

      // bottom of first puzzle piece
      setTop(piecePosition.toFixed(2));

      // top and bottom of the puzzle content-wrapper/container
      setContainerBot(containerBottom.toFixed(2));
      setContainerTop(containerTop.toFixed(2));
      // target place where pieces need to move to + distance needed
      setMidpoint(midpoint.toFixed(2));
      setDistance(Math.round(midpoint - top));
    }
  };

  //* joins pieces together
  const runAnimations = async (controlsArr) => {
    // x movement
    // if it's the first piece, or the third piece, move right
    for (let i = 0; i < controlsArr.length; i++) {
      if (i === 0 || i === 3) await controlsArr[i].start("left");
      else if (i === 2 || i === 5) await controlsArr[i].start("right");
    }

    // y movement
    for (let i = 0; i < controlsArr.length; i++) {
      if (i === 0 || i === 1 || i === 2) controlsArr[i].start("down");
      else controlsArr[i].start("up");
    }
  };

  //* return to original positions
  const resetAnimations = async (controlsArr) => {
    for (let i = 0; i < controlsArr.length; i++) {
      controlsArr[i].start("reset");
    }

    // keeps the distance the same
    setDistance(distance);
  };
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
      <>
        <motion.img
          src={value}
          alt={word}
          variants={variants}
          {...singlePieceRef()}
          animate={controls[countUp]}
        ></motion.img>
      </>
    );
  }

  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: "300px",
          height: "700px",
          backgroundColor: "orange",
          width: "1px",
        }}
      ></div>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1B4D3E",
          flexFlow: "column",
        }}
      >
        <h2 ref={titleRef} style={{ color: "lavender" }}>
          Scroll Testing Page
        </h2>
      </div>
      <div
        style={{
          position: "absolute",
          height: "278px",
          width: "1px",
          top: "0px",
          left: "10px",
        }}
      >
        <p>container bottom: {containerBot}</p>
      </div>
      <div
        style={{
          position: "absolute",
          height: "278px",
          width: "1px",
          top: "100px",
          left: "10px",
        }}
      >
        <p>container top: {containerTop}</p>
      </div>
      {/* SECTION */}
      <div
        style={{
          position: "absolute",
          height: "1px",
          width: "100%",
          top: "305px",
          left: "0px",
          backgroundColor: "green",
        }}
      ></div>
      <div
        style={{
          height: "fit-content",
          width: "100wh",
          outline: "1px dotted pink",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#88E788",
          flexFlow: "column",
        }}
      >
        <div
          style={{
            height: `50vh`,
            width: `50vw`,
            outline: `1px solid orange`,
            display: "flex",
            flexFlow: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
          ref={containerRef}
        >
          {puzzleImgs}
        </div>
        <div>
          <button onClick={() => runAnimations(controls)}>
            Start animations
          </button>
          <button onClick={() => resetAnimations(controls)}>
            Reset animations
          </button>
          <button onClick={() => findDistance()}>find Distance</button>
        </div>
        <h3>Halfway point: {midpoint}</h3>
        <h4>Top of Webpage to Top of Container: {containerTop}</h4>
        <h4>Top of Webpage to Bottom of Container: {containerBot}</h4>
        <h4>Bottom of the First Puzzle Piece: {top}</h4>
        <h4>Amount needed to reach the midpoint: {distance}</h4>
      </div>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#a8dcab",
          flexFlow: "column",
        }}
      >
        <div
          style={{
            height: "50%",
            width: "80%",
            border: "1px dotted blue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default TestPage;
