import React from "react";

const AboutSection = React.forwardRef((props, ref) => {
  // each tiles innerStyle

  const aboutSections = [
    { title: "Intro", color: "pink" },
    { title: "Backstory", color: "green" },
    { title: "Values", color: "purple" },
    { title: "Hobbies", color: "orange" },
  ];
  return (
    <section
      ref={ref}
      style={{
        height: "80vh",
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
          outline: "1px dotted green",
        }}
      >
        <div className="about-container">
          <div className="about-photo">
            <div style={{ height: "100%", width: "100%" }}></div>
          </div>
          <div className="about-info">
            <div className="about-tabs-container">
              {/* change into a map or loop*/}
              {aboutSections.map((tabSection) => (
                <div
                  className="about-tab"
                  style={{ backgroundColor: tabSection.color }}
                >
                  <p className="about-tab-title">{tabSection.title}</p>
                </div>
              ))}
            </div>
            <div className="about-info-body"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
