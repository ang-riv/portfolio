import React from "react";

function ProjectTile(props) {
  // return in a loop to make all of the tiles with different titles, descriptions, imgs, and colors
  const buttonColor = {
    backgroundColor: props.color,
  };
  return (
    <div className="project-tile-container">
      {/* image */}
      <img src={props.img} className="project-image" />
      {/* text */}
      <div className="project-text-container">
        <h4>{props.title}</h4>
        <p style={{ margin: "0.7em 0" }}>{props.description}</p>
      </div>
      <button style={buttonColor} className="project-btn">
        Live Site
      </button>
    </div>
  );
}

export default ProjectTile;
