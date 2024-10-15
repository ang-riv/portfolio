import React from "react";

const AboutInfo = ({ activeTab }) => {
  const test = activeTab.toLowerCase();
  const tabInfo = {
    intro: { title: "Who Am I?", description: "Lorem Ipsum." },
    backstory: {},
    values: {},
    hobbies: {},
  };
  // holder variable?
  let currentTab = "";

  // loop through tabInfo then return the appropriate title and description
  for (const tab in tabInfo) {
    // if the tab matches the activeTab then assign them to variables
    if (tab === test) {
      currentTab = tabInfo[tab];
    }
  }
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
