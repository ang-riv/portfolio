/* component dedicated to: 
-svg imports to condense the icons component
-global colors to stay consistent throughout the portfolio
- imgs for project tiles
*/

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

// project imgs
import unplugged from "./assets/project-imgs/unplugged.png";
import potluck from "./assets/project-imgs/potluck-generator.png";
import rogue from "./assets/project-imgs/rogue-pickings.png";
import gallery from "./assets/project-imgs/gh-gallery.png";
import notes from "./assets/project-imgs/sticky-notes.png";

/********** ADD CONTENT  ************/
// function to add colors or imgs into specific objects
export function addContent(object, property, array) {
  return Object.keys(object).forEach((key, val) => {
    object[key][property] = array[val];
  });
}

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

// adds colors to different sections
export function addColors(object) {
  addContent(object, "color", colors);
}

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

/********** PROJECT IMGS ************/
export const imgArr = [unplugged, potluck, gallery, notes, rogue];

// adds images to project tiles
export function addImgs(object) {
  addContent(object, "img", imgArr);
}
