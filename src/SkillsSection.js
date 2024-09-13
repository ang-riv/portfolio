import React from "react";
import { SkillsPuzzle } from "./Icons";

const SkillsSection = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      style={{
        height: "44vh",
        width: "100%",
        paddingTop: "1vh",
        backgroundColor: "#9FD1FF",
      }}
    >
      <h2>Skills</h2>
      <div
        className="content-wrapper"
        style={{
          height: "60%",
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
