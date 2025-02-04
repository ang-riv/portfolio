import React from "react";
import IntroPuzzle from "../../components/PuzzleAnimations/IntroPuzzle";
const IntroSection = React.forwardRef((_, ref) => {
  return (
    <section ref={ref} id="introSection" className="intro-section">
      <IntroPuzzle />
      <h1>
        Hi, I'm Angela, <br /> Front End Developer.
      </h1>
    </section>
  );
});

export default IntroSection;
