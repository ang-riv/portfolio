import React, { useState } from "react";
import { addColors } from "../Imports";
import AboutInfo from "./AboutInfo";
import useWindowSize from "../useWindowSize";
import SectionTitles from "../SectionTitles";

const AboutSection = React.forwardRef((_, ref) => {
  const [activeTab, setActiveTab] = useState("Intro");
  const size = useWindowSize();

  // for info body and which section to show
  const handleClick = (currentTab) => {
    setActiveTab(currentTab);
  };

  const aboutSections = [
    { title: "Intro", color: null },
    { title: "Backstory", color: null },
    { title: "Values", color: null },
    { title: "Hobbies", color: null },
  ];

  const aboutCopy = [...aboutSections];

  // adds colors to the tabs
  addColors(aboutCopy);

  return (
    <section
      ref={ref}
      style={{
        height: "fit-content",
        marginBottom: "20%",
      }}
    >
      <SectionTitles title="About" />
      <div className="about-content-wrapper">
        <div className="about-container">
          <div className="about-photo">
            <div style={{ height: "100%", width: "100%" }}></div>
          </div>
          <div className="about-info">
            {/* only show tabs on tablet + desktop */}
            {size.width > 767 ? (
              <div className="about-tabs-container">
                {/* making the tabs*/}
                {aboutCopy.map((tabSection) => (
                  <div
                    className="about-tab"
                    style={{ backgroundColor: tabSection.color }}
                    onClick={() => handleClick(tabSection.title)}
                  >
                    <p className="about-tab-title">{tabSection.title}</p>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}

            {/* inner content of each tab */}
            <AboutInfo activeTab={activeTab} />
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
