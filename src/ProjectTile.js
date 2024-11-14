import React from "react";
import { motion } from "framer-motion";

function ProjectTile(props) {
  // initial button style
  const buttonColor = {
    outline: `3px solid ${props.color}`,
    backgroundColor: "#FFFFFF",
  };

  // hover style
  const hoverColor = {
    backgroundColor: props.color,
    outline: `3px solid ${props.color}`,
  };
  return (
    <div className="project-tile-container">
      {/* image */}
      <img src={props.img} alt={props.imgAlt} className="project-image" />
      {/* text */}
      <div className="project-text-container">
        <h4>{props.title}</h4>
        <p style={{ margin: "0.7em 0" }}>{props.description}</p>
      </div>
      {/* button */}
      <motion.a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        style={buttonColor}
        className="project-btn"
        whileHover={hoverColor}
        transition={{ duration: 0.5 }}
      >
        Live Site
      </motion.a>
    </div>
  );
}

export default ProjectTile;
