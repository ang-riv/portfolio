import React from "react";
import { updatedInfo } from "./Imports";

const AboutInfo = ({ activeTab }) => {
  const test = activeTab.toLowerCase();

  // holder variable?
  let currentTab = "";

  // loop through tabInfo then return the appropriate title and description
  for (const tab in updatedInfo) {
    // if the tab matches the activeTab then assign them to variables
    if (tab === test) {
      currentTab = updatedInfo[tab];
    }
  }
  return (
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
  );
};

export default AboutInfo;
