import React, { useRef } from "react";
import { motion } from "framer-motion";

const TestPage = () => {
  // refs
  const spaceRef = useRef(null);
  let forthsPosition = 0;
  let containerWidth = 0;
  // finding the 1/4
  if (spaceRef.current) {
    const container = spaceRef.current.getBoundingClientRect();
    const containerHeight = container.height;
    console.log(containerHeight);
    forthsPosition = containerHeight / 4;
    containerWidth = container.width;
  }
  // styles
  const mainPage = {
    width: "100vh",
    height: "100vh",
    border: "5px solid lavender",
    display: "flex",
    justifyContent: "center",
  };
  const testSpaceStyles = {
    width: "40vh",
    height: "400px",
    outline: "2px solid lightCoral",
    position: "absolute",
    top: 50,
  };
  // find the position of the containerRef
  const iconPlacement = [];
  const initialPlacements = [];
  // for loop to put in the placement of the icons
  for (let i = 0; i < 4; i++) {
    const mid = forthsPosition / 2;
    initialPlacements.push(forthsPosition + i * forthsPosition - mid);
  }
  console.log(initialPlacements);
  const iconSize = 50;
  // to account for the size of the icon with the placement
  const halfIconSize = iconSize / 2;
  // placing the icons at the right places
  //! works but need to account for the height of the icons
  for (let i = 0; i < initialPlacements.length; i++) {
    // alternate sides + center the icon on the container's border with half the icon's size
    let side = 0;
    i % 2 === 0
      ? (side = side - halfIconSize)
      : (side = containerWidth - halfIconSize);
    iconPlacement.push(
      <div
        style={{
          height: `${iconSize}px`,
          width: `${iconSize}px`,
          position: "absolute",
          left: side,
          top: initialPlacements[i] - halfIconSize,
          backgroundColor: "skyBlue",
          borderRadius: "50%",
        }}
      ></div>
    );
  }
  console.log(initialPlacements);
  return (
    <div style={mainPage}>
      <div style={testSpaceStyles} ref={spaceRef}>
        {iconPlacement}
      </div>
    </div>
  );
};

export default TestPage;
