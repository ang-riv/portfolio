import React, { useState } from "react";
import { globalColors } from "./Imports";
const AboutSection = React.forwardRef((props, ref) => {
  let [activeTab, setActiveTab] = useState("");
  console.log(activeTab);
  const aboutSections = [
    { title: "Intro", color: globalColors.pink },
    { title: "Backstory", color: globalColors.green },
    { title: "Values", color: globalColors.purple },
    { title: "Hobbies", color: globalColors.yellow },
  ];
  console.log(activeTab);
  // add in the onClick for info body/ which section to show
  const handleClick = (currentTab) => {
    setActiveTab(currentTab);
  };
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
                  onClick={() => handleClick(tabSection.title)}
                >
                  <p className="about-tab-title">{tabSection.title}</p>
                </div>
              ))}
            </div>
            <div className="about-info-body">
              {/* inside content, add in a function */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
