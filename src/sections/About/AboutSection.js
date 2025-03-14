import React, { useState } from "react";
import { addColors } from "../../utils/colorData";
import AboutInfo from "./AboutInfo";
import AboutPhoto from "./AboutPhoto";
import useWindowSize from "../../components/useWindowSize";
import SectionTitles from "../../components/SectionTitles";

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
      <div className="about-content-wrapper center-flex">
        <div className="about-container center-flex">
          <AboutPhoto activeTab={activeTab} />
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
                    <h3 className="about-tab-title">{tabSection.title}</h3>
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
