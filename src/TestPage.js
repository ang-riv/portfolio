import React, { useRef, useState, useEffect } from "react";
import { useInView, motion, useAnimation } from "framer-motion";
import useWindowSize from "./useWindowSize";
import { desktopPieces } from "./Imports";

const TestPage = () => {
  const size = useWindowSize();
  const ref = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { threshold: 0.5 });
  const controls = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const centerRef = useRef(null);
  const [width, setWidth] = useState(0);

  // math
  const divisor = (width / 125).toFixed(2);
  const distance = (25 * divisor).toFixed(2);

  // create a random direction to rotate the piece
  const randomNum = () => {
    return Math.floor(Math.random() * 361);
  };

  React.useEffect(() => {
    // calculating distance
    let rect1 = 0;
    if (centerRef.current) {
      rect1 = centerRef.current.getBoundingClientRect();
      console.log(rect1.width);
    }

    if (isInView) {
      setWidth(rect1.width.toFixed(2));
    } else {
      setWidth(0);
    }
  }, [isInView]);

  const variants = {
    start: { x: 0, rotate: 0, transition: { duration: 0.5 } },
    move: (custom) => ({
      x: custom.xDistance,
      transition: { duration: 0.5 },
    }),
    reset: { x: 0 },
  };

  const runAnimations = async (controlsArr) => {
    // rotate to correct position first
    for (let i = 0; i < controlsArr.length; i++) {
      await controlsArr[i].start("start");
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
  };

  const resetAnimations = async (controlsArr) => {
    for (let i = 0; i < controlsArr.length; i++) {
      controlsArr[i].start("reset");
    }
  };

  const holder1 = [];
  let counter = Object.keys(desktopPieces).length;
  let imgSize = "4em";
  if (size.width > 800) {
    imgSize = "13em";
  } else if (size.width <= 650) {
    imgSize = "4em";
  }
  for (const [key, value] of Object.entries(desktopPieces)) {
    const word = "puzzle piece with the word " + key;
    counter--;
    holder1.push(
      <>
        <motion.img
          style={{ height: imgSize, width: imgSize }}
          src={value}
          alt={word}
          variants={variants}
          onViewportEnter={() => runAnimations(controls)}
          onViewportLeave={() => resetAnimations(controls)}
          viewport={{ root: ref }}
          ref={centerRef}
          animate={controls[counter]}
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
        <motion.h3 className="header">InView Working</motion.h3>
        <div className="skill-desktop-div" ref={ref}></div>
        <div>{holder1}</div>
        <div>
          <button
            style={{
              height: "100px",
              width: "200px",
              borderRadius: "20px",
              border: "1px solid red",
            }}
            onClick={() => resetAnimations(controls)}
          >
            Reset animations
          </button>
          <button
            style={{
              height: "100px",
              width: "200px",
              borderRadius: "20px",
              border: "1px solid blue",
            }}
            onClick={() => runAnimations(controls)}
          >
            Run animations
          </button>
        </div>
      </div>
      <div style={{ height: "100vh" }}>
        <motion.h3
          ref={titleRef}
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
