import React from "react";
import { motion } from "framer-motion";

function ProjectTile(props) {
  const badges = props.badges;

  const buttonColor = {
    outline: `3px solid ${props.color}`,
    backgroundColor: "#FFFFFF",
  };

  const hoverColor = {
    backgroundColor: props.color,
    outline: `3px solid ${props.color}`,
  };

  const ariaLabel = `${props.title} Live Site`;
  return (
    <div className="project-tile-container">
      <div className="project-tile-wrapper">
        {/* image */}
        <img src={props.img} alt={props.imgAlt} className="project-image" />
        {/* text */}
        <div>
          <h3 className="project-title">{props.title}</h3>
          <div className="project-badges-wrapper">
            {badges.map((badge, index) => (
              <p key={index} style={buttonColor} className="project-badge">
                {badge}
              </p>
            ))}
          </div>
          <p style={{ margin: "0.7em 0 0 0" }}>{props.description}</p>
        </div>
      </div>
      {/* button */}
      <motion.a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        style={buttonColor}
        className="project-btn center-flex"
        whileHover={hoverColor}
        transition={{ duration: 0.5 }}
        aria-label={ariaLabel}
      >
        Live Site
      </motion.a>
    </div>
  );
}

export default ProjectTile;
