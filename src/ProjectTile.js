import React from "react";

function ProjectTile(props) {
  // return in a loop to make all of the tiles with different titles, descriptions, imgs, and colors
  return (
    <div
      style={{
        height: "390px",
        width: "280px",
        border: "1px solid #D6D6D6",
        borderRadius: "5px",
        padding: "1%",
      }}
    >
      <div
        style={{
          height: "50%",
          width: "100%",
          backgroundColor: "lightGrey",
          borderRadius: "5px",
        }}
      ></div>
      <div style={{ margin: "0 5px" }}>
        <h4>Project Name</h4>
        <p style={{ marginBottom: "11px" }}>
          Short paragraph that has like one to three sentences. Cool sentence
          here. Super cool sentence.
        </p>
      </div>
      <button>Live Site</button>
    </div>
  );
}

export default ProjectTile;
