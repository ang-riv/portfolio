import React from "react";
import htmlPiece from "./assets/htmlPiece.svg";
import { SkillsPuzzle } from "./Icons";
const SkillsSection = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      style={{
        height: "64vh",
        width: "100%",
        paddingTop: "1vh",
        backgroundColor: "#9FD1FF",
      }}
    >
      <h2>Skills</h2>
      <div
        className="content-wrapper"
        style={{
          outline: "1px dotted red",
          height: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5%",
        }}
      >
        <SkillsPuzzle />
      </div>
    </section>
  );
});

export default SkillsSection;
