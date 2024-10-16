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
                padding: " 5px 15px",
                marginTop: "20px",
                borderRadius: "10px",
              }}
            >
              <h4 style={{ textAlign: "center" }}>{value.title}</h4>
              <p style={{ textAlign: "justify" }}>{value.description}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
  // for mobile
};

export default AboutInfo;
