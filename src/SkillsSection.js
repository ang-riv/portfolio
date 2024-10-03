import React from "react";
import { SkillsSectionPuzzle } from "./Icons";
const SkillsSection = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      style={{
        height: "50vh",
        width: "100%",
        paddingTop: "0.5vh",
        paddingBottom: "3vh",
        backgroundColor: "#9FD1FF",
      }}
    >
      <h2>Skills</h2>
      <div
        className="content-wrapper"
        style={{
          height: "60%",
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "5%",
        }}
      >
        <SkillsSectionPuzzle />
      </div>
    </section>
  );
});

export default SkillsSection;
