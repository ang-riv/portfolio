import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { desktopPieces } from "./Imports";

const TestPage = () => {
  // math variables
  // grab the width
  const [width, setWidth] = useState(0);
  const controlsOuter = useAnimation();
  const controlsInner = useAnimation();
  //divide it by the original size
  const divisor = (width / 125).toFixed();
  const innerDistance = Number((divisor * 25).toFixed());
  const outerDistance = innerDistance * 2;
  const outerRef = useRef(null);

  const randomNum = () => {
    return Math.floor(Math.random() * 361);
  };

  const styleSize = { width: "125px", height: "100px" };
  // this grabs the measurements when the page initially loads
  useEffect(() => {
    const rect1 = outerRef.current.getBoundingClientRect();

    const width = rect1.width.toFixed();
    setWidth(width);
  }, []);

  // distance
  const inner = async () => {
    await controlsInner.start({
      rotate: 0,
      transition: { delay: 1, duration: 1.5 },
    });
    await controlsInner.start({
      x: innerDistance,
    });
  };

  const outer = async () => {
    await controlsOuter.start({
      rotate: 0,
      transition: { delay: 1, duration: 1.5 },
    });
    await controlsOuter.start({
      x: outerDistance,
    });
  };

  // testing
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
            initial={{ rotate: randomNum() }}
            whileInView={() => outer()}
            animate={controlsOuter}
            style={styleSize}
            ref={outerRef}
          />
          <motion.img
            src={desktopPieces.css}
            whileInView={() => inner()}
            initial={{ rotate: randomNum() }}
            animate={controlsInner}
            style={styleSize}
          />
          <motion.img src={desktopPieces.js} style={styleSize} />
        </div>
      </div>
    </>
  );
};

export default TestPage;
