import React from "react";

const AboutSection = React.forwardRef((props, ref) => {
  // each tiles innerStyle
  const innerStyle = {};
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
                backgroundColor: "white",
                border: "1px solid #b5b5b5",
                height: "57%",
                width: "95%",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px 0px #b5b5b5",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "#CCFFCC",
                height: "35%",
                width: "95%",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px 0px #b5b5b5",
              }}
            >
              <div style={{ margin: "15px" }}>
                <h3
                  style={{
                    margin: "0 0 10px 0",
                    padding: "0",
                  }}
                >
                  Title
                </h3>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
            </div>
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
                backgroundColor: "#FFAFAF",
                height: "25%",
                width: "90%",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px 0px #b5b5b5",
              }}
            >
              <div style={{ margin: "15px" }}>
                <h3
                  style={{
                    margin: "0 0 10px 0",
                    padding: "0",
                  }}
                >
                  Title
                </h3>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#CCCCFF",
                height: "39%",
                width: "90%",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px 0px #b5b5b5",
              }}
            >
              <div style={{ margin: "15px" }}>
                <h3
                  style={{
                    margin: "0 0 10px 0",
                    padding: "0",
                  }}
                >
                  Title
                </h3>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco. Ut enim ad
                  minim veniam, quis nostrud.
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#F2E589",
                height: "25%",
                width: "90%",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px 0px #b5b5b5",
              }}
            >
              <div style={{ margin: "15px" }}>
                <h3
                  style={{
                    margin: "0 0 10px 0",
                    padding: "0",
                  }}
                >
                  Title
                </h3>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
