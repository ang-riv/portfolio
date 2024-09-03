import React from "react";

const AboutSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} style={{ height: "80vh" }}>
      <h2>About</h2>
      <div
        className="content-wrapper"
        style={{
          outline: "1px dotted lightBlue",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            outline: "1px dotted lightBlue",
            height: "90%",
            width: "70%",
          }}
        ></div>
      </div>
    </section>
  );
});

export default AboutSection;
