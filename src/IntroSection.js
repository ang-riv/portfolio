import React from "react";
import { IntroPuzzle } from "./Icons";
const IntroSection = React.forwardRef((props, ref) => {
  const containerStyle = {
    height: "95vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <section ref={ref} id="introSection" style={containerStyle}>
      <figure style={{ height: "460px", width: "480px" }}>
        <IntroPuzzle />
      </figure>

      <h1>
        Hi, I'm Angela, <br /> Front End Developer.
      </h1>
    </section>
  );
});

export default IntroSection;
