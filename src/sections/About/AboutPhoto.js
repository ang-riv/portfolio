import { React, useRef } from "react";
import { motion } from "framer-motion";
import avatar from "../../assets/avatar.png";

const AboutPhoto = ({ activeTab }) => {
  const containerRef = useRef(null);
  let containerTop = 0;
  const numOfIcons = 4;
  const positions = [];
  // testing styles
  const styles = {
    height: "2px",
    width: "100%",
    backgroundColor: "red",
    position: "absolute",
    top: 0,
    left: 0,
  };
  // getting measurements for where to place the icons
  if (containerRef.current) {
    const container = containerRef.current.getBoundingClientRect();
    containerTop = container.height / numOfIcons;
  }

  // finding the coordinates
  for (let i = 0; i < numOfIcons.length; i++) {
    positions.push(containerTop + i * containerTop - 50);
  }
  return (
    <div className="about-photo">
      <div style={styles}></div>
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
