import React, { useRef, useState, useEffect } from "react";
import { useInView, motion, useAnimation } from "framer-motion";
import { introPieces } from "./Imports";
import { SocialLinks } from "./Icons";
import { title } from "framer-motion/client";

//! ADD ONSCROLL STUFF AND EVERYTHING SHOULD WORK!
const TestPage = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  // make sure that the container is in the middle of the viewport
  // might need to use midpoint?
  const isInView = useInView(containerRef, { margin: "-50% -50% -50% -50%" });
  const controls = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const topRef = useRef(null);
  const [top, setTop] = useState(null);
  const [midpoint, setMidpoint] = useState(null);
  const [containerBot, setContainerBot] = useState(null);
  const [containerTop, setContainerTop] = useState(null);

  const [distance, setDistance] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [changeD, setChangeD] = useState(false);
  // math
  // original distance = 50

  // change onScroll/ inView
  // maybe get rid of use effect idk due to controls dependency
  useEffect(() => {
    // add to onScroll so it calculates it right away(?)
    changeD === false ? findDistance() : setDistance(55);
    if (clicked === true) {
      runAnimations(controls);
    } else {
      resetAnimations(controls);
    }
    /*
    if (isInView) {
      runAnimations(controls);
    } else {
      resetAnimations(controls);
    }
      */

    if (isInView) console.log("in view");
    else console.log("not in view");
  }, [clicked, controls, isInView]); // ?dependency ignore comment

  // should be distance + 50 for the gap
  const trial = Number(distance + 50);
  const variants = {
    even: { y: -trial, transition: { duration: 0.5 } },
    odd: { y: trial, transition: { duration: 0.5 } },
    left: { x: -50, transition: { duration: 0.5 } },
    right: { x: 50, transition: { duration: 0.5 } },
    reset: { x: 0, y: 0 },
  };

  // might need in useEffect dependency
  const findDistance = () => {
    if (topRef.current && containerRef.current) {
      const rect1 = topRef.current.getBoundingClientRect();
      const container = containerRef.current.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;

      const containerTop = container.top + scrollTop;
      const containerBottom = container.bottom + scrollTop;

      const midpoint = (containerTop + containerBottom) / 2;
      const piecePosition = rect1.bottom + scrollTop;

      // bottom of first puzzle piece
      setTop(piecePosition.toFixed(2));

      // top and bottom of the puzzle content-wrapper/container
      setContainerBot(containerBottom.toFixed(2));
      setContainerTop(containerTop.toFixed(2));
      setMidpoint(midpoint.toFixed(2));
      setDistance(Math.round(midpoint - top));
    } else {
      console.log("not working");
    }
  };

  const runAnimations = async (controlsArr) => {
    setClicked(true);

    // find distance between the puzzles for the y movement
    if (changeD === false) findDistance();

    // y movement
    for (let i = 0; i < controlsArr.length; i++) {
      if (i === 0 || i === 1) await controlsArr[i].start("odd");
      else await controlsArr[i].start("even");
    }

    // x movement
    for (let i = 0; i < controlsArr.length; i++) {
      if (i === 0 || i === 2) controlsArr[i].start("right");
      else controlsArr[i].start("left");
    }
  };

  const resetAnimations = async (controlsArr) => {
    for (let i = 0; i < controlsArr.length; i++) {
      controlsArr[i].start("reset");
    }

    setClicked(false);
    // maybe calculate it again and make it so that if distance is a different number, then set it as that distance but if not, just keep it the same?
    if (changeD === false) setDistance(0);
  };

  const holder1 = [];
  let countUp = -1;

  for (const [key, value] of Object.entries(introPieces)) {
    const word = "puzzle piece";
    countUp++;

    const singlePieceRef = () => {
      if (key === "pinkPiece") return { ref: topRef };
    };

    holder1.push(
      <>
        <motion.img
          src={value}
          alt={word}
          variants={variants}
          {...singlePieceRef()}
          animate={controls[countUp]}
          style={{ outline: "1px solid blue" }}
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
          height: "100vh",
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
            height: "60vh",
            width: "60vh",
            outline: "1px solid lavender",
            display: "flex",
            flexFlow: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
          ref={containerRef}
        >
          {holder1}
        </div>
        <div>
          <button
            style={{
              height: "50px",
              width: "fit-content",
              margin: "25px 10px",
              padding: "0px 10px",
              border: "1px solid white",
              borderRadius: "10px",
            }}
            onClick={() => resetAnimations(controls)}
          >
            Reset Animations
          </button>
          <button
            style={{
              height: "50px",
              width: "fit-content",
              margin: "25px 10px",
              padding: "0px 10px",
              border: "1px solid white",
              borderRadius: "10px",
            }}
            onClick={() => runAnimations(controls)}
          >
            Run Animations
          </button>
          <button
            style={{
              height: "50px",
              width: "fit-content",
              margin: "25px 10px",
              padding: "0px 10px",
              border: "1px solid white",
              borderRadius: "10px",
            }}
            onClick={() => setChangeD(!changeD)}
          >
            Change Distance
          </button>
          <button
            style={{
              height: "50px",
              width: "fit-content",
              margin: "25px 10px",
              padding: "0px 10px",
              border: "1px solid white",
              borderRadius: "10px",
            }}
            onClick={() => findDistance()}
          >
            Calculate Distance
          </button>
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
