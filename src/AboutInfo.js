import React from "react";
import useWindowSize from "./useWindowSize";
import { updatedInfo } from "./Imports";

const AboutInfo = ({ activeTab }) => {
  const tabName = activeTab.toLowerCase();

  const size = useWindowSize();
  // holder variable
  let currentTab = "";

  // loop through tabInfo then return the appropriate title and description
  for (const tab in updatedInfo) {
    // if the tab matches the activeTab then assign them to variables
    if (tab === tabName) {
      currentTab = updatedInfo[tab];
    }
  }

  // for showing the description of each section, prevents putting a value section's ul within a p element
  function sectionDescription(key, value) {
    let description =
      key !== "values" ? (
        <p style={{ textAlign: "justify" }}>{value.description}</p>
      ) : (
        <ul style={{ paddingLeft: "0" }}>{value.description}</ul>
      );

    return description;
  }
  return (
    <>
      {size.width > 767 ? (
        <div
          className="about-info-body"
          style={{ backgroundColor: currentTab.color }}
        >
          <h4 style={{ margin: 0, padding: "5% 0 0 0", textAlign: "center" }}>
            {currentTab.title}
          </h4>
          <p
            style={{
              margin: 0,
              padding: "5%",
              textAlign: "justify",
            }}
          >
            {currentTab.description}
          </p>
        </div>
      ) : (
        <>
          {Object.entries(updatedInfo).map(([key, value]) => (
            <div
              key={key}
              style={{
                backgroundColor: value.color,
                padding: " 5px 20px",
                marginTop: "20px",
                borderRadius: "10px",
              }}
            >
              <h4 style={{ textAlign: "center" }}>{value.title}</h4>
              {sectionDescription(key, value)}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default AboutInfo;
