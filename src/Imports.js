// file dedicated to svg imports to condense the icons component and global colors to stay consistent throughout the portfolio

/*** INTRO SECTION SVGS***/
//intro
import piece1 from "./assets/intro-svgs/piece1.svg";
import piece2 from "./assets/intro-svgs/piece2.svg";
import piece3 from "./assets/intro-svgs/piece3.svg";
import piece4 from "./assets/intro-svgs/piece4.svg";

/*** SKILLS SECTION SVGS***/
// desktop/tablet
import htmlPiece from "./assets/desktop-skill-svgs/htmlPiece.svg";
import cssPiece from "./assets/desktop-skill-svgs/cssPiece.svg";
import javascriptPiece from "./assets/desktop-skill-svgs/javascriptPiece.svg";
import reactPiece from "./assets/desktop-skill-svgs/reactPiece.svg";
import bootstrapPiece from "./assets/desktop-skill-svgs/bootstrapPiece.svg";
import githubPiece from "./assets/desktop-skill-svgs/githubPiece.svg";

// mobile
import mobileHtmlPiece from "./assets/mobile-skill-svgs/mobileHtmlPiece.svg";
import mobileCssPiece from "./assets/mobile-skill-svgs/mobileCssPiece.svg";
import mobileJavascriptPiece from "./assets/mobile-skill-svgs/mobileJavascriptPiece.svg";
import mobileBootstrapPiece from "./assets/mobile-skill-svgs/mobileBootstrapPiece.svg";
import mobileReactPiece from "./assets/mobile-skill-svgs/mobileReactPiece.svg";
import mobileGithubPiece from "./assets/mobile-skill-svgs/mobileGithubPiece.svg";

/********** GLOBAL COLORS ************/
// if the color is being used in any style props, it needs to be in quotation marks, so this fcn does that
export function quotationColors(color) {
  return `${color}`;
}

export const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#f2e589", "#9fd1ff"];

// adding quotes + assigning names to the colors
export const globalColors = {
  pink: quotationColors(colors[0]),
  green: quotationColors(colors[1]),
  purple: quotationColors(colors[2]),
  yellow: quotationColors(colors[3]),
  blue: quotationColors(colors[4]),
};

/********** SVG OBJECTS ************/
export const introPieces = {
  pinkPiece: piece1,
  greenPiece: piece2,
  yellowPiece: piece3,
  purplePiece: piece4,
};

export const desktopPieces = {
  html: htmlPiece,
  css: cssPiece,
  js: javascriptPiece,
  react: reactPiece,
  bootstrap: bootstrapPiece,
  github: githubPiece,
};

export const mobilePieces = {
  html: mobileHtmlPiece,
  css: mobileCssPiece,
  js: mobileJavascriptPiece,
  bootstrap: mobileBootstrapPiece,
  react: mobileReactPiece,
  github: mobileGithubPiece,
};

/********** ABOUT SECTION  ************/
// tabs
export const aboutSections = [
  { title: "Intro", color: null },
  { title: "Backstory", color: null },
  { title: "Values", color: null },
  { title: "Hobbies", color: null },
];

export const updatedAbout = [...aboutSections];

// add colors to tabs
Object.keys(updatedAbout).forEach((key) => {
  updatedAbout[key].color = colors[key];
});

export const list = () => {
  return (
    <p
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
    </p>
  );
};

export const tabInfo = {
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

export const updatedInfo = { ...tabInfo };

// add colors to tabInfo
Object.keys(updatedInfo).forEach((key, val) => {
  updatedInfo[key].color = colors[val];
});

// about mobile views - use map?
