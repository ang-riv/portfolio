import { React, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import avatar from "../../assets/avatar.png";
import AboutIcon from "./AboutIcon";

const AboutPhoto = ({ activeTab }) => {
  const containerRef = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  let halfTop = containerTop / 2;
  const numOfIcons = 4;
  let positions = [];

  // testing styles
  const styles = {
    width: "fit-content",
    height: "fit-content",
    position: "absolute",
    top: 43,
    left: -24.5,
  };

  // getting measurements for where to place the icons
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const height = container.height / numOfIcons;
      setContainerWidth(container.width);
      setContainerTop(height);
    }
  }, [containerRef, containerTop]);

  // finding the coordinates
  for (let i = 0; i < numOfIcons; i++) {
    // minus halfTop to center the icon in each section
    positions.push(containerTop + i * containerTop - halfTop);
  }

  // creating icons with the right placement
  const iconComponents = positions.map((placement, index) => {
    // center the icon on the edge of the container + alternate sides
    let side = 0;
    index % 2 === 0 ? (side = -8) : (side = containerWidth + 8);
    return (
      <AboutIcon
        key={index}
        activeTab={activeTab}
        yPlacement={placement}
        xPlacement={side}
      />
    );
  });
  //console.log(positions);
  return (
    <div className="about-photo" ref={containerRef}>
      <div style={styles}>{iconComponents}</div>
      <img
        src={avatar}
        alt="profile avatar"
        style={{
          height: "80%",
          width: "90%",
        }}
      />
    </div>
  );
};

export default AboutPhoto;
