import React from "react";
import { globalColors } from "./Imports";

const list = () => {
  return (
    <ul>
      <li>loves bringing</li>
      <li>jdfklajsdf</li>
      <li></li>
    </ul>
  );
};

const tabInfo = {
  intro: {
    title: "Who Am I?",
    description: "Lorem Ipsum.",
    color: globalColors.pink,
  },
  values: {
    title: "I'm a developer who...",
    description: list(),
  },
  backstory: {},
  hobbies: {},
};

const AboutInfo = ({ activeTab }) => {
  const test = activeTab.toLowerCase();

  // holder variable?
  let currentTab = "";

  // loop through tabInfo then return the appropriate title and description
  for (const tab in tabInfo) {
    // if the tab matches the activeTab then assign them to variables
    if (tab === test) {
      currentTab = tabInfo[tab];
    }
  }
  // testing
  console.log(JSON.stringify(currentTab));
  return (
    <>
      <h4 style={{ margin: 0, padding: 0, textAlign: "center" }}>
        {currentTab.title}
      </h4>
      <p style={{ margin: 0, padding: 0 }}>{currentTab.description}</p>
    </>
  );
};

export default AboutInfo;
