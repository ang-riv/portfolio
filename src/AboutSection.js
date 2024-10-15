import React, { useState } from "react";
import { globalColors } from "./Imports";
import AboutInfo from "./AboutInfo";
const AboutSection = React.forwardRef((props, ref) => {
  let [activeTab, setActiveTab] = useState("Intro");
  console.log(activeTab);
  const aboutSections = [
    { title: "Intro", color: globalColors.pink },
    { title: "Backstory", color: globalColors.green },
    { title: "Values", color: globalColors.purple },
    { title: "Hobbies", color: globalColors.yellow },
  ];

  // add in the onClick for info body/ which section to show
  const handleClick = (currentTab) => {
    setActiveTab(currentTab);
  };
  return (
    <section
      ref={ref}
      style={{
        height: "85vh",
        marginBottom: "15%",
      }}
    >
      <h2>About</h2>
      <div
        className="about-content-wrapper"
        style={{
          height: "80%",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
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
                  onClick={() => handleClick(tabSection.title)}
                >
                  <p className="about-tab-title">{tabSection.title}</p>
                </div>
              ))}
            </div>
            <AboutInfo activeTab={activeTab} />
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
