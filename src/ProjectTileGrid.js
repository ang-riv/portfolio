import React from "react";

function ProjectTileGrid(props) {
  // return in a loop to make all of the tiles with different titles, descriptions, imgs, and colors
  const buttonColor = {
    backgroundColor: props.color,
  };
  return (
    <div className="project-tile-container2">
      {/* image */}
      <img src={props.img} className="project-image2" />
      {/* text */}
      <div className="project-text-container2">
        <h4>{props.title}</h4>
        <p style={{ margin: "0.7em 0" }}>{props.description}</p>
      </div>
      <button style={buttonColor} className="btn2">
        Live Site
      </button>
    </div>
  );
}

export default ProjectTileGrid;
