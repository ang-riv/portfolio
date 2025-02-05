import React, { useRef } from "react";
import { motion } from "framer-motion";

const TestPage = () => {
  // refs
  const spaceRef = useRef(null);
  // styles
  const mainPage = {
    width: "100vh",
    height: "100vh",
    border: "5px solid lavender",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const testSpaceStyles = {
    width: "80vh",
    height: "80vh",
    outline: "2px solid lightCoral",
  };
  // div creator
  const gridPattern = [];
  const cols = [];
  const innerImage = [];
  if (spaceRef.current) {
    const row = spaceRef.current.getBoundingClientRect();
    const individualRowLength = row.height / 4;
    const individualColLength = row.width / 5;
    console.log(individualRowLength);
    // condense these for loops  with a function
    // const image pattern ()

    for (let i = 0; i < 5; i++) {
      i % 2 === 0 ? innerImage.push("❤️") : innerImage.push("⭐");
      cols.push(
        <>
          <motion.div
            style={{
              outline: "1px solid plum",
              height: "100%",
              width: individualColLength,
            }}
          >
            {innerImage}
          </motion.div>
        </>
      );
    }
    for (let i = 0; i < 4; i++) {
      gridPattern.push(
        <>
          <motion.div
            style={{
              outline: `1px solid skyBlue`,
              height: individualRowLength,
              width: "100%",
              display: "flex",
            }}
          >
            {cols}
          </motion.div>
        </>
      );
    }
  }

  return (
    <div style={mainPage}>
      <div style={testSpaceStyles} ref={spaceRef}>
        {gridPattern}
      </div>
    </div>
  );
};

export default TestPage;
