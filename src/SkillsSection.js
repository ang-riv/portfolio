import React from "react";
import { Puzzle, LogoPuzzle } from "./Icons";
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
        <figure
          style={{
            outline: "1px dotted pink",
            width: "40%",
            margin: "0",
            padding: "0",
          }}
        >
          <Puzzle
            color1="orange"
            color2="yellow"
            color3="blue"
            color4="purple"
            size="12em"
          />
        </figure>
        <figure
          style={{
            outline: "1px dotted green",
            width: "40%",
            margin: "0",
            padding: "0",
          }}
        >
          <Puzzle
            color1="orange"
            color2="yellow"
            color3="blue"
            color4="purple"
            size="12em"
          />
        </figure>
      </div>
      <LogoPuzzle />
    </section>
  );
});

export default SkillsSection;
