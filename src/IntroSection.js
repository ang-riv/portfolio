import React from "react";
import { PuzzlePiece, IntroPuzzle } from "./Icons";
const IntroSection = React.forwardRef((props, ref) => {
  const containerStyle = {
    height: "95vh",
    backgroundColor: "lightblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <section ref={ref} style={containerStyle}>
      <figure style={{ height: "443px", width: "470px" }}>
        <IntroPuzzle />
      </figure>

      <h1>
        Hi, I'm Angela, <br /> Front End Developer.
      </h1>
    </section>
  );
});

export default IntroSection;
