import React from "react";

const AboutSection = React.forwardRef((props, ref) => {
  // each tiles innerStyle
  return (
    <section
      ref={ref}
      style={{
        height: "90vh",
        marginBottom: "15%",
      }}
    >
      <h2>About</h2>
      <div
        className="content-wrapper"
        style={{
          height: "95%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            maxWidth: "45.25em",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(6, 1fr)",
            gap: "0.625em",
          }}
        >
          <div
            style={{
              borderRadius: "0.625em",
              gridRow: "span 4",
              backgroundColor: "purple",
            }}
          ></div>
          <div
            style={{
              borderRadius: "0.625em",
              padding: "0.625em",
              gridRow: "span 2",
              background: "lightSalmon",
            }}
          >
            <h3>Title</h3>
            <p>
              Hi, I’m Angela!👋 I’m a Front End Developer located in the{" "}
              <s>Winterpeg </s>
              Winnipeg, Manitoba who is passionate about making the web a more
              beautiful and accessible place.
            </p>
          </div>
          <div
            style={{
              borderRadius: "0.625em",
              gridRow: "span 3",
              padding: "0.625em",
              background: "pink",
            }}
          >
            <h3>Title</h3>
            <ul style={{ paddingLeft: "1.3em" }}>
              <li style={{ marginBottom: "0.5em" }}>
                loves bringing innovative ideas to life with clean and efficient
                code.
              </li>
              <li style={{ marginBottom: "0.5em" }}>
                strives to create web experiences that are easy to navigate and
                are easy on the eyes.
              </li>
              <li style={{ marginBottom: "0.5em" }}>
                values accessibility for everyone! admires all kinds of designs
                - from sleek and minimalistic, to quirky and interactive, I want
                to be a part of creating them all!
              </li>
            </ul>
          </div>
          <div
            style={{
              borderRadius: "0.625em",
              gridRow: "span 2",
              background: "lavender",
              padding: "1em",
            }}
          >
            <h3>Title</h3>
            <p>
              Coding became a part of my life back in high school after trying
              out a computer science course. Being able to see the process
              behind building websites I use everyday captured my interest right
              away! When I went to university, I pursued a different path and
              after graduating, I revisited coding again with free tutorials
              online. It reminded me of how fun coding is and rekindled my love
              for it.
            </p>
          </div>
          <div
            style={{
              borderRadius: "0.625em",
              gridRow: "span 1",
              background: "lightBlue",
              padding: "1em",
            }}
          >
            <h3>Title</h3>

            <p>
              I’m scouring the streets for new sweets to try, piecing together
              jigsaw puzzles, or collecting fun and colorful art prints!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
