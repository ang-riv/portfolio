import React from "react";
import { SkillPuzzle } from "./Icons";
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
        }}
      >
        <div
          style={{
            height: "45vh",
            width: "100vw",
            outline: "1px dotted purple",
            display: "flex",
            justifyContent: "center",
            gap: "5%",
          }}
        >
          <figure
            style={{
              outline: "1px dotted pink",
              width: "40%",
              margin: "0",
              padding: "0",
            }}
          >
            <SkillPuzzle />
          </figure>
          <figure
            style={{
              outline: "1px dotted green",
              width: "40%",
              margin: "0",
              padding: "0",
            }}
          >
            <SkillPuzzle />
          </figure>
        </div>
      </div>
    </section>
  );
});

export default SkillsSection;
