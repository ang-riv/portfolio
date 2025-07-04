import React from "react";
import IntroPuzzle from "../../components/PuzzleAnimations/IntroPuzzle";
const IntroSection = React.forwardRef(({ id }, ref) => {
  return (
    <section ref={ref} id={id} className="intro-section center-flex">
      <IntroPuzzle />
      <h1>
        Hi, I'm Angela Rivera, <br /> Front-end Developer.
      </h1>
    </section>
  );
});

export default IntroSection;
