import React from "react";

const IntroSection = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      style={{ height: "100vh", backgroundColor: "lightblue" }}
    >
      <h1>Main Heading Text</h1>
      <h2>Subheading Text</h2>
      <p>Paragraph Text</p>
    </section>
  );
});

export default IntroSection;
