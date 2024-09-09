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
            display: "flex",
            flexDirect: "row",
          }}
        >
          <div
            style={{
              outline: "1px dotted red",
              backgroundColor: "salmon",
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "3%",
            }}
          >
            <div
              style={{ backgroundColor: "red", height: "62%", width: "90%" }}
            ></div>
            <div
              style={{
                backgroundColor: "purple",
                height: "30%",
                width: "90%",
              }}
            ></div>
          </div>
          <div
            style={{
              outline: "1px dotted green",
              backgroundColor: "lightGreen",
              width: "50%",
              height: "100%",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
