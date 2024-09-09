import React from "react";

const AboutSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} style={{ height: "85vh" }}>
      <h2>About</h2>
      <div
        className="content-wrapper"
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "90%",
            width: "75%",
            display: "flex",
            flexDirect: "row",
          }}
        >
          {/* section 1 */}
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "end",
              gap: "3%",
            }}
          >
            <div
              style={{
                backgroundColor: "red",
                height: "57%",
                width: "95%",
                borderRadius: "10px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "purple",
                height: "35%",
                width: "95%",
                borderRadius: "10px",
              }}
            ></div>
          </div>
          {/* section 2 */}
          <div
            style={{
              width: "55%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "3%",
            }}
          >
            <div
              style={{
                backgroundColor: "pink",
                height: "25%",
                width: "90%",
                borderRadius: "10px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "blue",
                height: "39%",
                width: "90%",
                borderRadius: "10px",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "olive",
                height: "25%",
                width: "90%",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
