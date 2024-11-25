import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { desktopPieces } from "./Imports";

const TestPage = () => {
  // math variables
  // grab the width
  const [width, setWidth] = useState(0);

  //divide it by the original size
  const divisor = (width / 125).toFixed();
  const innerDistance = (divisor * 25).toFixed();
  const outerDistance = innerDistance * 2;
  const outerRef = useRef(null);

  // this grabs the measurements when the page initially loads
  // need to change to onScroll stuff
  useEffect(() => {
    const rect1 = outerRef.current.getBoundingClientRect();

    const width = rect1.width.toFixed();
    setWidth(width);
  }, []);

  // distance
  const inner = {
    x: outerDistance / 2,
    transition: { delay: 1 },
  };
  const outer = {
    x: outerDistance,
    transition: { delay: 1.5 },
  };

  // testing
  console.log(outerDistance);
  return (
    <>
      <h1>Finding Distance</h1>
      <div
        style={{
          width: "100%",
          outline: "1px dotted lavender",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{ width: "90%", height: "50%", outline: "1px dotted pink" }}
        >
          <motion.img
            src={desktopPieces.html}
            animate={outer}
            style={{ width: "247px", height: "198px" }}
            ref={outerRef}
          />
          <motion.img
            src={desktopPieces.css}
            animate={inner}
            style={{ width: "247px", height: "198px" }}
          />
          <motion.img
            src={desktopPieces.js}
            style={{ width: "247px", height: "198px" }}
          />
        </div>
      </div>
    </>
  );
};

export default TestPage;
