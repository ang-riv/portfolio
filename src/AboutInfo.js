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
  return (
    <>
      {size.width > 768 ? (
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
                outline: "1px dotted red",
                backgroundColor: value.color,
              }}
            >
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
  // for mobile
};

export default AboutInfo;
