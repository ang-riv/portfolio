import React, { useRef, useState, useEffect } from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { desktopPieces } from "./Imports";

const TestPage = () => {
  const ref = useRef(null);

  const controls = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const centerRef = useRef(null);
  const [width, setWidth] = useState(null);

  // math
  const divisor = (width / 125).toFixed(2);
  const distance = (25 * divisor).toFixed(2);

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
    // 0 is moving too far + almost there! just need to include github
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
          animate={controls[5]}
        ></motion.img>
        <motion.img
          variants={variants}
          src={desktopPieces.css}
          alt="puzzle piece with the word CSS"
          initial={{ rotate: randomNum() }}
          animate={controls[4]}
        ></motion.img>
        <motion.img
          src={desktopPieces.js}
          variants={variants}
          alt="puzzle piece with the word JavaScript"
          ref={centerRef}
          initial={{ rotate: randomNum() }}
          animate={controls[3]}
        ></motion.img>
        <motion.img
          src={desktopPieces.bootstrap}
          variants={variants}
          alt="puzzle piece with the word Bootstrap"
          initial={{ rotate: randomNum() }}
          animate={controls[2]}
        ></motion.img>
        <motion.img
          src={desktopPieces.react}
          variants={variants}
          alt="puzzle piece with the word React"
          initial={{ rotate: randomNum() }}
          animate={controls[1]}
        ></motion.img>
        <motion.img
          src={desktopPieces.github}
          variants={variants}
          alt="puzzle piece with the word Github"
          initial={{ rotate: randomNum() }}
          animate={controls[0]}
        ></motion.img>
      </div>
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
  );
};

export default TestPage;
