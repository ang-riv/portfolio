import React, { useRef, useState, useEffect } from "react";
import { useInView, motion, useAnimation } from "framer-motion";
import useWindowSize from "./useWindowSize";
import { desktopPieces, introPieces } from "./Imports";

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
  const [width, setWidth] = useState(0);
  const [clicked, setClicked] = useState(false);
  // math
  const divisor = (width / 200).toFixed(2);
  // original distance = 50
  const distance = (50 * divisor).toFixed(2);

  // create a random direction to rotate the piece
  useEffect(() => {
    if (clicked === true) {
      runAnimations(controls);
    } else {
      resetAnimations(controls);
    }
  }, [clicked, controls]);

  const variants = {
    even: { y: -78, transition: { duration: 0.5 } },
    odd: { y: 78, transition: { duration: 0.5 } },
    left: { x: -50, transition: { duration: 0.5 } },
    right: { x: 50, transition: { duration: 0.5 } },
    reset: { x: 0, y: 0 },
  };

  const runAnimations = async (controlsArr) => {
    let rect = 0;
    setClicked(true);
    console.log("clicked");
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

    // calculate
    /*
    if (centerRef.current) {
      rect = centerRef.current.getBoundingClientRect();
      console.log(rect.width);
      setWidth(rect.width.toFixed(2));
    }

    // then move
    for (let i = 1; i < controlsArr.length; i++) {
      await controlsArr[i].start({
        x: i * distance,
        transition: { duration: 0.5 },
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
      */
  };

  const resetAnimations = async (controlsArr) => {
    for (let i = 0; i < controlsArr.length; i++) {
      controlsArr[i].start("reset");
    }

    for (let i = 0; i < controlsArr.length; i++) {}
    setWidth(0);
    setClicked(false);
  };

  const holder1 = [];
  let countUp = -1;
  let counter = Object.keys(introPieces).length;
  let imgSize = "9em";

  for (const [key, value] of Object.entries(introPieces)) {
    const word = "puzzle piece";
    countUp++;
    holder1.push(
      <>
        <motion.img
          src={value}
          alt={word}
          variants={variants}
          ref={centerRef}
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
        <button
          style={{
            height: "50px",
            width: "fit-content",
            marginTop: "25px",
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
            marginTop: "25px",
            padding: "0px 10px",
            border: "1px solid white",
            borderRadius: "10px",
          }}
          onClick={() => runAnimations(controls)}
        >
          Run Animations
        </button>
      </div>
      <div style={{ height: "100vh" }}>
        <motion.h3
          initial={{ x: 0 }}
          animate={
            isInView
              ? {
                  x: 100,
                  transition: { delay: 1 },
                }
              : { x: 0 }
          }
        >
          useInView Working {width}
        </motion.h3>
      </div>
      <div style={{ height: "200vh" }}></div>
      <h3>{width}</h3>
    </div>
  );
};

export default TestPage;
