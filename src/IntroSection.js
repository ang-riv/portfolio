import React from "react";
import { Puzzle } from "./Icons";
const IntroSection = React.forwardRef((props, ref) => {
  // puzzle colors
  const color1 = "#FFAFAF";
  const color2 = "#CCFFCC";
  const color3 = "#BCBCFF";
  const color4 = "#F2E589";

  const containerStyle = {
    height: "95vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <section ref={ref} id="introSection" style={containerStyle}>
      <figure style={{ height: "460px", width: "480px" }}>
        {/* destructure (?) into props */}
        <Puzzle
          color1={color1}
          color2={color2}
          color3={color3}
          color4={color4}
          size="14em"
        />
      </figure>

      <h1>
        Hi, I'm Angela, <br /> Front End Developer.
      </h1>
    </section>
  );
});

export default IntroSection;
