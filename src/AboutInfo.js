import React from "react";
import useWindowSize from "./useWindowSize";
import { addColors } from "./Imports";

const AboutInfo = ({ activeTab }) => {
  const tabName = activeTab.toLowerCase();

  const size = useWindowSize();
  // holder variable
  let currentTab = "";

  // list for the values tab
  const list = () => {
    return (
      <p
        className="about-values-tab"
        style={{ margin: 0, padding: "0 0 0 15px" }}
      >
        <li>
          loves bringing innovative ideas to life with clean and efficient code.
        </li>
        <li>
          strives to create web experiences that are easy to navigate and are
          easy on the eyes.
        </li>
        <li>values accessibility for everyone!</li>
        <li>
          admires all kinds of designs - from sleek and minimalistic, to quirky
          and interactive, I want to be a part of creating them all!
        </li>
      </p>
    );
  };

  // contains the content for each tab
  const tabInfo = {
    intro: {
      title: "Who Am I?",
      description:
        "Hi, I’m Angela! I’m a Front End Developer located in Winnipeg, Manitoba who is passionate about making the web a more beautiful and accessible place.",
      color: null,
    },
    backstory: {
      title: "A Brief History",
      description:
        "Coding became a part of my life back in high school after trying out a computer science course. Being able to see the process behind building websites I use everyday captured my interest right away! When I went to university, I pursued a different path and after graduating, I revisited coding again with free tutorials online. It reminded me of how fun coding is and rekindled my love for it.",
      color: null,
    },
    values: {
      title: "I'm a Developer Who...",
      description: list(),
      color: null,
    },

    hobbies: {
      title: "When I'm Not Coding:",
      description:
        "I’m scouring the streets for new sweets to try, piecing together jigsaw puzzles, or collecting fun and colorful art prints!",
      color: null,
    },
  };

  const tabCopy = { ...tabInfo };

  // add colors to the sections
  addColors(tabCopy);

  // loop through tabInfo then return the appropriate title and description, color
  for (const tab in tabCopy) {
    // if the tab matches the activeTab then assign them to variables
    if (tab === tabName) {
      currentTab = tabCopy[tab];
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
          {Object.entries(tabInfo).map(([key, value]) => (
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
