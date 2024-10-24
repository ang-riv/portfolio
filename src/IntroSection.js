import React from "react";
import { IntroPuzzle } from "./Icons";
const IntroSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="introSection" className="introSection">
      <figure className="intro-puzzle-container">
        <IntroPuzzle />
      </figure>

      <h1>
        Hi, I'm Angela, <br /> Front End Developer.
      </h1>
    </section>
  );
});

export default IntroSection;
