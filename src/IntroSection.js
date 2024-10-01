import React from "react";
import { IntroPuzzle } from "./Icons";
const IntroSection = React.forwardRef((props, ref) => {
  // puzzle colors
  const color1 = "#FFAFAF";
  const color2 = "#CCFFCC";
  const color3 = "#BCBCFF";
  const color4 = "#F2E589";

  return (
    <section ref={ref} id="introSection" className="introSection">
      <figure className="intro-puzzle-container">
        {/* destructure (?) into props */}
        <IntroPuzzle />
      </figure>

      <h1>
        Hi, I'm Angela, <br /> Front End Developer.
      </h1>
    </section>
  );
});

export default IntroSection;
