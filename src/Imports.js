// file dedicated to svg imports to condense the icons component

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
