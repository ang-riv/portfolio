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

// mobile
import mobileHtml from "../assets/new-mobile/left/html.png";
import mobileCss from "../assets/new-mobile/left/css.png";
import mobileJavascript from "../assets/new-mobile/left/js.png";
import mobileReact from "../assets/new-mobile/left/react.png";

import mobileBootstrap from "../assets/new-mobile/right/bootstrap.png";
import mobileTailwind from "../assets/new-mobile/right/tailwind.png";
import mobileApi from "../assets/new-mobile/right/api.png";
import mobileGithub from "../assets/new-mobile/right/github.png";

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

export const desktopPieces = {
  html: html,
  css: css,
  tailwind: tailwind,
  api: api,
  javascript: javascript,
  react: react,
  bootstrap: bootstrap,
  github: github,
};

export const mobilePieces = {
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
  mobilePieces.react,
  mobilePieces.javascript,
  mobilePieces.css,
  mobilePieces.html,
];

export const rightPieces = [
  mobilePieces.github,
  mobilePieces.api,
  mobilePieces.tailwind,
  mobilePieces.bootstrap,
];

/********** PROJECT IMGS ************/
export const imgArr = [dinner, notes, tip, gallery, unplugged];

export function addImgs(object) {
  addContent(object, "img", imgArr);
}
