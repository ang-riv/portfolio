import React from "react";

function ProjectTile(props) {
  const buttonColor = {
    backgroundColor: props.color,
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
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        style={buttonColor}
        className="project-btn"
      >
        Live Site
      </a>
    </div>
  );
}

export default ProjectTile;
