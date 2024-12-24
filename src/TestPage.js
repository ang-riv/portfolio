import React, { useRef, useState, useEffect } from "react";
import { useInView, motion, useAnimation } from "framer-motion";
import { introPieces } from "./Imports";
import { SocialLinks } from "./Icons";

//! ADD ONSCROLL STUFF AND EVERYTHING SHOULD WORK!
const TestPage = () => {
  const ref = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { threshold: 0.5 });
  const controls = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const centerRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const [distance, setDistance] = useState(0);
  const [clicked, setClicked] = useState(false);
  const yMove = (distance / 2).toFixed(2);
  // math
  // original distance = 50

  // create a random direction to rotate the piece
  useEffect(() => {
    if (clicked === true) {
      runAnimations(controls);
    } else {
      resetAnimations(controls);
    }
  }, [clicked, controls]);

  const variants = {
    even: { y: -80, transition: { duration: 0.5 } },
    odd: { y: 80, transition: { duration: 0.5 } },
    left: { x: -50, transition: { duration: 0.5 } },
    right: { x: 50, transition: { duration: 0.5 } },
    reset: { x: 0, y: 0 },
  };

  const runAnimations = async (controlsArr) => {
    let rect = 0;
    setClicked(true);
    console.log("clicked");

    //! math is not mathing + sequence of events
    // calculate distance for y movement

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

  const findDistance = () => {
    if (topRef.current && bottomRef.current) {
      const rect1 = topRef.current.getBoundingClientRect();
      const rect2 = bottomRef.current.getBoundingClientRect();

      const dy = rect2.top - rect1.bottom;
      const calculatedDistance = Math.abs(dy);
      setDistance(rect1.bottom.toFixed(2));
    }
  };
  const resetAnimations = async (controlsArr) => {
    for (let i = 0; i < controlsArr.length; i++) {
      controlsArr[i].start("reset");
    }

    for (let i = 0; i < controlsArr.length; i++) {}
    setClicked(false);
  };

  const holder1 = [];
  let countUp = -1;

  for (const [key, value] of Object.entries(introPieces)) {
    const word = "puzzle piece";
    countUp++;

    let currentRef;
    switch (key) {
      case "pinkPiece":
        currentRef = topRef;
        break;
      case "yellowPiece":
        currentRef = bottomRef;
        break;
      default:
        currentRef = centerRef;
    }

    holder1.push(
      <>
        <motion.img
          src={value}
          alt={word}
          variants={variants}
          ref={currentRef}
          animate={controls[countUp]}
        ></motion.img>
      </>
    );
  }

  return (
    <div>
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
            onClick={() => findDistance()}
          >
            Calculate Distance
          </button>
        </div>
        <h3>Distance is: {distance}</h3>
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
