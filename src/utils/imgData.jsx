/*** INTRO SECTION SVGS***/
//intro
import piece1 from "../assets/intro-svgs/piece1.svg";
import piece2 from "../assets/intro-svgs/piece2.svg";
import piece3 from "../assets/intro-svgs/piece3.svg";
import piece4 from "../assets/intro-svgs/piece4.svg";

/*** SKILLS SECTION SVGS***/

// new desktop/tablet
import html from "../assets/new-desktop/top/html.png";
import css from "../assets/new-desktop/top/css.png";
import javascript from "../assets/new-desktop/top/js.png";
import react from "../assets/new-desktop/top/react.png";

import bootstrap from "../assets/new-desktop/bot/bootstrap.png";
import tailwind from "../assets/new-desktop/bot/tailwind.png";
import api from "../assets/new-desktop/bot/api.png";
import github from "../assets/new-desktop/bot/github.png";

// new mobile
import mobileHtml from "../assets/new-mobile/left/html.png";
import mobileCss from "../assets/new-mobile/left/css.png";
import mobileJavascript from "../assets/new-mobile/left/js.png";
import mobileReact from "../assets/new-mobile/left/react.png";

import mobileBootstrap from "../assets/new-mobile/right/bootstrap.png";
import mobileTailwind from "../assets/new-mobile/right/tailwind.png";
import mobileApi from "../assets/new-mobile/right/api.png";
import mobileGithub from "../assets/new-mobile/right/github.png";

// mobile
import mobileHtmlPiece from "../assets/mobile-skill-svgs/mobileHtmlPiece.svg";
import mobileCssPiece from "../assets/mobile-skill-svgs/mobileCssPiece.svg";
import mobileJavascriptPiece from "../assets/mobile-skill-svgs/mobileJavascriptPiece.svg";
import mobileBootstrapPiece from "../assets/mobile-skill-svgs/mobileBootstrapPiece.svg";
import mobileReactPiece from "../assets/mobile-skill-svgs/mobileReactPiece.svg";
import mobileGithubPiece from "../assets/mobile-skill-svgs/mobileGithubPiece.svg";

// project imgs
import gallery from "../assets/project-imgs/gh-gallery.png";
import dinner from "../assets/project-imgs/dinner-party.png";
import notes from "../assets/project-imgs/sticky-notes.png";
import unplugged from "../assets/project-imgs/unplugged.png";
import tip from "../assets/project-imgs/tip-calculator.png";

/********** ADD CONTENT  ************/
// function to add colors or imgs into specific objects
export function addContent(object, property, array) {
  return Object.keys(object).forEach((key, val) => {
    object[key][property] = array[val];
  });
}

/********** SVG OBJECTS ************/
export const introPieces = {
  pinkPiece: piece1,
  greenPiece: piece2,
  yellowPiece: piece3,
  purplePiece: piece4,
};

export const newDesktopPieces = {
  html: html,
  css: css,
  tailwind: tailwind,
  api: api,
  javascript: javascript,
  react: react,
  bootstrap: bootstrap,
  github: github,
};

export const newMobilePieces = {
  html: mobileHtml,
  css: mobileCss,
  tailwind: mobileTailwind,
  api: mobileApi,
  javascript: mobileJavascript,
  react: mobileReact,
  bootstrap: mobileBootstrap,
  github: mobileGithub,
};

export const leftPieces = [
  newMobilePieces.react,
  newMobilePieces.javascript,
  newMobilePieces.css,
  newMobilePieces.html,
];

export const rightPieces = [
  newMobilePieces.github,
  newMobilePieces.api,
  newMobilePieces.tailwind,
  newMobilePieces.bootstrap,
];

export const mobilePieces = {
  html: mobileHtmlPiece,
  css: mobileCssPiece,
  js: mobileJavascriptPiece,
  bootstrap: mobileBootstrapPiece,
  react: mobileReactPiece,
  github: mobileGithubPiece,
};

/********** PROJECT IMGS ************/
export const imgArr = [dinner, notes, tip, gallery, unplugged];

export function addImgs(object) {
  addContent(object, "img", imgArr);
}
