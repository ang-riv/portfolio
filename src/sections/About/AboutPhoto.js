import { React, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import avatar from "../../assets/avatar.png";
import AboutIcon from "./AboutIcon";

const AboutPhoto = ({ activeTab }) => {
  const containerRef = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  let halfTop = containerTop / 2;
  const numOfIcons = 4;
  let positions = [];

  // testing styles
  const styles = {
    height: "2px",
    width: "100%",
    backgroundColor: "red",
    position: "absolute",
    top: 43,
    left: -24.5,
  };

  // getting measurements for where to place the icons
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const height = container.height / numOfIcons;
      setContainerTop(height);
    }
  }, [containerRef, containerTop]);

  // finding the coordinates
  for (let i = 0; i < numOfIcons; i++) {
    // minus halfTop to center the icon in each section
    positions.push(containerTop + i * containerTop - halfTop);
  }

  console.log(positions);
  return (
    <div className="about-photo" ref={containerRef}>
      <div style={styles}>
        <AboutIcon activeTab={activeTab} />
      </div>
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
