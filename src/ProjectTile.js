import React from "react";

function ProjectTile(props) {
  // return in a loop to make all of the tiles with different titles, descriptions, imgs, and colors
  const buttonColor = {
    backgroundColor: props.color,
  };
  return (
    <div
      style={{
        height: "340px",
        width: "260px",
        border: "1px solid #D6D6D6",
        borderRadius: "5px",
        padding: "1%",
      }}
    >
      {/* image */}
      <div
        style={{
          height: "50%",
          width: "100%",
          backgroundColor: "lightGrey",
          borderRadius: "5px",
        }}
      ></div>
      {/* text */}
      <div style={{ height: "50%", padding: "1%" }}>
        <h4>{props.title}</h4>
        <p style={{ margin: "0.7em 0" }}>{props.description}</p>
        <button style={buttonColor}>Live Site</button>
      </div>
    </div>
  );
}

export default ProjectTile;
