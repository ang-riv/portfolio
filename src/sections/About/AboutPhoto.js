import { React, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import avatar from "../../assets/avatar.png";
import AboutIcon from "./AboutIcon";

const AboutPhoto = ({ activeTab }) => {
  const containerRef = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  let halfTop = containerTop / 2 + 15;
  const numOfIcons = 4;
  let positions = [];

  // testing styles
  const styles = {
    width: "100%",
    height: "2px",
    position: "absolute",
    backgroundColor: "slateBlue",
    top: 0,
  };

  // getting measurements for where to place the icons
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const height = container.height / numOfIcons;
      console.log(container.height);
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
  const iconComponents = positions.map((yPlacement, index) => {
    // center the icon on the edge of the container + alternate sides
    let side = 0;
    index % 2 === 0 ? (side = -24) : (side = containerWidth - 24);
    console.log(yPlacement);
    return (
      <AboutIcon
        key={index}
        activeTab={activeTab}
        yPlacement={yPlacement}
        xPlacement={side}
      />
    );
  });
  return (
    <div className="about-photo" ref={containerRef}>
      {iconComponents}
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
