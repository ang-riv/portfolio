import React from "react";
import { globalColors } from "./Imports";

const list = () => {
  return (
    <ul
      className="about-values-tab"
      style={{ margin: 0, padding: "0 0 0 15px" }}
    >
      <li>
        loves bringing innovative ideas to life with clean and efficient code.
      </li>
      <li>
        strives to create web experiences that are easy to navigate and are easy
        on the eyes.
      </li>
      <li>values accessibility for everyone!</li>
      <li>
        admires all kinds of designs - from sleek and minimalistic, to quirky
        and interactive, I want to be a part of creating them all!
      </li>
    </ul>
  );
};

const tabInfo = {
  intro: {
    title: "Who Am I?",
    description:
      "Hi, I’m Angela! I’m a Front End Developer located in Winnipeg, Manitoba who is passionate about making the web a more beautiful and accessible place.",
    color: globalColors.pink,
  },
  values: {
    title: "I'm a Developer Who...",
    description: list(),
    color: globalColors.purple,
  },
  backstory: {
    title: "A Brief History",
    description:
      "Coding became a part of my life back in high school after trying out a computer science course. Being able to see the process behind building websites I use everyday captured my interest right away! When I went to university, I pursued a different path and after graduating, I revisited coding again with free tutorials online. It reminded me of how fun coding is and rekindled my love for it.",
    color: globalColors.green,
  },
  hobbies: {
    title: "When I'm Not Coding:",
    description:
      "I’m scouring the streets for new sweets to try, piecing together jigsaw puzzles, or collecting fun and colorful art prints!",
    color: globalColors.yellow,
  },
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
          textJustify: "",
        }}
      >
        {currentTab.description}
      </p>
    </div>
  );
};

export default AboutInfo;
