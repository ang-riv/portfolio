import React from "react";
import useWindowSize from "./useWindowSize";
// intro puzzle
import piece1 from "./assets/intro-svgs/piece1.svg";
import piece2 from "./assets/intro-svgs/piece2.svg";
import piece3 from "./assets/intro-svgs/piece3.svg";
import piece4 from "./assets/intro-svgs/piece4.svg";
// pieces for skill puzzle
import htmlPiece from "./assets/desktop-skill-svgs/htmlPiece.svg";
import cssPiece from "./assets/desktop-skill-svgs/cssPiece.svg";
import javascriptPiece from "./assets/desktop-skill-svgs/javascriptPiece.svg";
import reactPiece from "./assets/desktop-skill-svgs/reactPiece.svg";
import bootstrapPiece from "./assets/desktop-skill-svgs/bootstrapPiece.svg";
import githubPiece from "./assets/desktop-skill-svgs/githubPiece.svg";
// pieces for mobile skill puzzle - uses the same pieces from css and react ^
import mobileHtmlPiece from "./assets/mobile-skill-svgs/mobileHtmlPiece.svg";
import mobileJavascriptPiece from "./assets/mobile-skill-svgs/mobileJavascriptPiece.svg";
import mobileBootstrapPiece from "./assets/mobile-skill-svgs/mobileBootstrapPiece.svg";
import mobileGithubPiece from "./assets/mobile-skill-svgs/mobileGithubPiece.svg";

// 2x2 puzzle in introSection
export function IntroPuzzle(props) {
  const size = useWindowSize();
  function puzzleMargins(size1, size2, size3) {
    if (size.width < 600) {
      // if greater that
      // mobile size
      return size1;
    } else if (size.width > 600 && size.width < 1024) {
      // tablet size
      return size2;
    } else {
      // desktop size
      return size3;
    }
  }

  return (
    <>
      <img src={piece1} className="intro-piece" alt="pink puzzle piece" />
      <img
        src={piece2}
        className="intro-piece"
        alt="green puzzle piece"
        style={{ marginBottom: puzzleMargins("1.5em", "2.3em", "3em") }}
      />
      <img
        src={piece3}
        className="intro-piece"
        alt="yellow puzzle piece"
        style={{ marginLeft: puzzleMargins("1.5em", "2.4em", "2.6em") }}
      />
      <img
        src={piece4}
        className="intro-piece"
        alt="yellow puzzle piece"
        style={{ marginBottom: puzzleMargins("1.4em", "2.2em", "3em") }}
      />
    </>
  );
}

// puzzle in skill section
export function SkillsPuzzle(props) {
  // potentially change so that they are all a random direction then move it onScroll
  const num = 0;
  const randomNum = `rotate(${num}deg)`;
  const style = {
    transform: randomNum,
  };
  return (
    <div
      style={{
        maxWidth: "1400px",
        width: "95%",
        display: "flex",
        flexFlow: "row wrap",
      }}
    >
      <img
        src={htmlPiece}
        alt="puzzle piece with the word HTML"
        style={style}
      ></img>
      <img src={cssPiece} alt="puzzle piece with the word CSS"></img>
      <img
        src={javascriptPiece}
        alt="puzzle piece with the word JavaScript"
      ></img>
      <img
        src={bootstrapPiece}
        alt="puzzle piece with the word Bootstrap"
      ></img>
      <img src={reactPiece} alt="puzzle piece with the word React"></img>
      <img
        src={githubPiece}
        alt="puzzle piece with the word Github"
        style={{ width: "17%" }}
      ></img>
    </div>
  );
}

export function MobileSkillsPuzzle(props) {
  return (
    <div
      style={{
        maxWidth: "1400px",
        width: "95%",
        display: "flex",
        flexFlow: "row wrap",
      }}
    ></div>
  );
}

/* sizes for icons based on screen size */
function SocialIconSize() {
  const size = useWindowSize();
  return size.width > 480 ? "4em" : "2.5em";
}

export function GithubIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={SocialIconSize()}
      height={SocialIconSize()}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="black"
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      ></path>
    </svg>
  );
}

export function EmailIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={SocialIconSize()}
      height={SocialIconSize()}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="black"
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
      ></path>
    </svg>
  );
}

export function LinkedInIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={SocialIconSize()}
      height={SocialIconSize()}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="black"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
      ></path>
    </svg>
  );
}

export function FrontEndMentorIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3.5em"
      height="3.5em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="black"
        d="M12.17 1.272a.73.73 0 0 0-.718.732v13.914a.73.73 0 0 0 .732.732a.73.73 0 0 0 .732-.732V2.004a.73.73 0 0 0-.745-.732M23.246 5.44a.7.7 0 0 0-.277.063l-6.282 2.804a.733.733 0 0 0 0 1.336l6.282 2.814a.7.7 0 0 0 .3.064a.732.732 0 0 0 .297-1.4L18.78 8.976l4.786-2.137a.734.734 0 0 0 .37-.966a.73.73 0 0 0-.69-.433m-22.5 5.032a.732.732 0 0 0-.722.915c1.736 6.677 7.775 11.341 14.683 11.341a.732.732 0 0 0 0-1.464A13.706 13.706 0 0 1 1.44 11.02a.73.73 0 0 0-.694-.547"
      ></path>
    </svg>
  );
}

/* groups together the social links + styles */
export function SocialLinks(props) {
  const titleStyle2 = {
    marginLeft: "0.7em",
    fontFamily: "Alice, sans-serif",
    fontSize: "1.7em",
    fontWeight: "bold",
  };

  return (
    <>
      <a
        href="https://github.com/ang-riv"
        target="_blank"
        rel="noreferrer"
        className="link-style"
      >
        <GithubIcon style={{ marginLeft: "0.3em" }} />
        <p className="link-title">Github</p>
      </a>
      <a
        href="mailto: a.riveraa99@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="link-style"
      >
        <EmailIcon style={{ marginLeft: "0.3em" }} />
        <p className="link-title">Email</p>
      </a>
      <a href="https://www.linkedin.com/in/ang-riv" className="link-style">
        <LinkedInIcon style={{ marginLeft: "0.3em" }} />
        <p className="link-title">LinkedIn</p>
      </a>
      <a
        href="https://www.frontendmentor.io/profile/ang-riv"
        className="link-style"
      >
        <FrontEndMentorIcon style={{ marginLeft: "0.5em" }} />
        <p style={titleStyle2}>FrontEndMentor</p>
      </a>
    </>
  );
}

/* mobile navigation icons */

export function QuestionMarkIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4em"
      height="4em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="black"
        d="M13.037 20.863c0 1.302 1.145 2.36 2.555 2.36s2.556-1.058 2.556-2.37V19.15c0-.111.073-.209.18-.242C21.676 17.85 24 14.919 24 11.562v-1.254c0-4.239-3.69-7.773-8.227-7.861c-2.28-.05-4.432.744-6.065 2.212c-1.622 1.469-2.523 3.447-2.523 5.552c0 1.311 1.155 2.369 2.566 2.369s2.555-1.058 2.555-2.36c0-.822.35-1.596.986-2.173a3.4 3.4 0 0 1 2.375-.872c1.78.04 3.223 1.45 3.223 3.143v1.244c0 1.468-1.124 2.731-2.683 2.996c-1.834.313-3.17 1.791-3.17 3.514zM15.5 30a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
      ></path>
    </svg>
  );
}

export function GearIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4em"
      height="4em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="black"
        d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z"
      ></path>
    </svg>
  );
}

export function CodeIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4em"
      height="4em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path d="M0 0h24v24H0z"></path>
        <path
          fill="black"
          d="M14.62 2.662a1.5 1.5 0 0 1 1.04 1.85l-4.431 15.787a1.5 1.5 0 0 1-2.889-.81L12.771 3.7a1.5 1.5 0 0 1 1.85-1.039ZM7.56 6.697a1.5 1.5 0 0 1 0 2.12L4.38 12l3.182 3.182a1.5 1.5 0 1 1-2.122 2.121L1.197 13.06a1.5 1.5 0 0 1 0-2.12l4.242-4.243a1.5 1.5 0 0 1 2.122 0Zm8.88 2.12a1.5 1.5 0 1 1 2.12-2.12l4.243 4.242a1.5 1.5 0 0 1 0 2.121l-4.242 4.243a1.5 1.5 0 1 1-2.122-2.121L19.621 12z"
        ></path>
      </g>
    </svg>
  );
}

export function SpeechIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4em"
      height="4em"
      viewBox="0 0 26 26"
      {...props}
    >
      <path
        fill="black"
        d="M13 .188C5.924.188.187 5.252.187 11.5c0 3.177 1.488 6.039 3.876 8.094c-.521 3.009-3.887 4.234-3.657 5.062c3.01 1.245 8.971-1.645 9.875-2.093c.874.166 1.789.25 2.719.25c7.076 0 12.813-5.065 12.813-11.313S20.075.187 13 .187z"
      ></path>
    </svg>
  );
}
