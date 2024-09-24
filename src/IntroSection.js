import React from "react";
import { Puzzle } from "./Icons";
const IntroSection = React.forwardRef((props, ref) => {
  // puzzle colors
  const color1 = "#FFAFAF";
  const color2 = "#CCFFCC";
  const color3 = "#BCBCFF";
  const color4 = "#F2E589";

  return (
    <section ref={ref} id="introSection" className="introSection">
      <figure className="introPuzzleSize" style={{ outline: "1px solid pink" }}>
        {/* destructure (?) into props */}
        <Puzzle
          color1={color1}
          color2={color2}
          color3={color3}
          color4={color4}
          size="13em"
        />
      </figure>

      <h1>
        Hi, I'm Angela, <br /> Front End Developer.
      </h1>
    </section>
  );
});

export default IntroSection;
