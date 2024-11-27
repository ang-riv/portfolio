import React, { useRef, useState, useEffect } from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { desktopPieces } from "./Imports";

const TestPage = () => {
  const ref = useRef(null);

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();

  const controls = [
    controls1,
    controls2,
    controls3,
    controls4,
    controls5,
    controls6,
  ];
  const centerRef = useRef(null);
  const [width, setWidth] = useState(null);

  // math
  const divisor = (width / 125).toFixed(2);
  const distance = (25 * divisor).toFixed(2);
  const outerDistance = (distance * 2).toFixed(2);

  // create a random direction to rotate the piece
  const randomNum = () => {
    return Math.floor(Math.random() * 361);
  };

  useEffect(() => {
    // calculating distance
    const rect1 = centerRef.current.getBoundingClientRect();
    setWidth(rect1.width.toFixed(2));
  }, []);

  const variants = {
    start: { x: 0, rotate: 0, transition: { delay: 0.5, duration: 1 } },
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
    for (let i = 0; i < controlsArr.length; i++) {
      await controlsArr[i].start({
        x: (i + 1) * distance,
        transition: { duration: 0.5 },
      });
    }
  };

  return (
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
      <div className="skill-desktop-div" ref={ref}>
        <motion.img
          variants={variants}
          src={desktopPieces.html}
          alt="puzzle piece with the word HTML"
          initial={{ rotate: randomNum() }}
          viewport={{ root: ref }}
          animate={controls[0]}
        ></motion.img>
        <motion.img
          variants={variants}
          src={desktopPieces.css}
          alt="puzzle piece with the word CSS"
          initial={{ rotate: randomNum() }}
          animate={controls[1]}
        ></motion.img>
        <motion.img
          src={desktopPieces.js}
          variants={variants}
          alt="puzzle piece with the word JavaScript"
          ref={centerRef}
          initial={{ rotate: randomNum() }}
        ></motion.img>
        <motion.img
          src={desktopPieces.bootstrap}
          variants={variants}
          alt="puzzle piece with the word Bootstrap"
          initial={{ rotate: randomNum() }}
        ></motion.img>
        <motion.img
          src={desktopPieces.react}
          variants={variants}
          alt="puzzle piece with the word React"
          initial={{ rotate: randomNum() }}
        ></motion.img>
        <motion.img
          src={desktopPieces.github}
          variants={variants}
          alt="puzzle piece with the word Github"
        ></motion.img>
      </div>
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
  );
};

export default TestPage;
