import React from "react";
import htmlPiece from "./assets/htmlPiece.svg";
import cssPiece from "./assets/cssPiece.svg";
import javascriptPiece from "./assets/javascriptPiece.svg";
import reactPiece from "./assets/reactPiece.svg";
import bootstrapPiece from "./assets/bootstrapPiece.svg";
import githubPiece from "./assets/githubPiece.svg";

// single puzzle piece for intro puzzle
export function ColorPieces(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 20 20"
      {...props}
    >
      <circle cx={17} cy={10} r={3} fill={props.fillColor}></circle>
      <path
        fill={props.fillColor}
        d="M10.58 3A3 3 0 0 1 11 4.5a3 3 0 0 1-6 0A3 3 0 0 1 5.42 3H1v12a2 2 0 0 0 2 2h12V3z"
      ></path>
    </svg>
  );
}

// 2x2 puzzle
export function Puzzle(props) {
  return (
    <>
      <ColorPieces
        fillColor={props.color1}
        size={props.size}
        style={{ transform: "rotate(90deg)" }}
      />
      <ColorPieces
        fillColor={props.color2}
        size={props.size}
        style={{ transform: "rotate(-180deg)", marginBottom: "1.3em" }}
      />
      <ColorPieces
        fillColor={props.color3}
        size={props.size}
        style={{ marginLeft: "1.4em" }}
      />
      <ColorPieces
        fillColor={props.color4}
        size={props.size}
        style={{
          transform: "rotate(-90deg)",
          marginBottom: "1.3em",
        }}
      />
    </>
  );
}

// puzzle in skill section
export function SkillsPuzzle(props) {
  // potentially change so that they are all a random direction then move it onScroll
  const num = 90;
  const randomNum = `rotate(${num}deg)`;
  const style = {
    transform: randomNum,
  };
  return (
    <div
      style={{
        width: "95%",
        display: "flex",
        flexFlow: "row nowrap",
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
        className="test"
        src={githubPiece}
        alt="puzzle piece with the word Github"
        style={{ width: "17%" }}
      ></img>
    </div>
  );
}

export function GithubIcon(props) {
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
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      ></path>
    </svg>
  );
}

export function EmailIcon(props) {
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
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
      ></path>
    </svg>
  );
}

export function LinkedInIcon(props) {
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

export function SocialLinks(props) {
  const titleStyle = {
    marginLeft: "0.5em",
    fontFamily: "Alice, sans-serif",
    fontSize: "2em",
    fontWeight: "bold",
  };

  const titleStyle2 = {
    marginLeft: "0.7em",
    fontFamily: "Alice, sans-serif",
    fontSize: "1.7em",
    fontWeight: "bold",
  };

  const linkStyle = {
    border: "1px solid #d9d9d9",
    height: "33%",
    width: "40%",
    borderRadius: "10px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  };

  return (
    <>
      <a href="https://github.com/ang-riv" className="test">
        <GithubIcon style={{ marginLeft: "0.3em" }} />
        <p style={titleStyle}>Github</p>
      </a>
      <a href="mailto: a.riveraa99@gmail.com" target="_blank" style={linkStyle}>
        <EmailIcon style={{ marginLeft: "0.3em" }} />
        <p style={titleStyle}>Email</p>
      </a>
      <a href="https://www.linkedin.com/in/ang-riv" style={linkStyle}>
        <LinkedInIcon style={{ marginLeft: "0.3em" }} />
        <p style={titleStyle}>LinkedIn</p>
      </a>
      <a href="https://www.frontendmentor.io/profile/ang-riv" style={linkStyle}>
        <FrontEndMentorIcon style={{ marginLeft: "0.5em" }} />
        <p style={titleStyle2}>FrontEndMentor</p>
      </a>
    </>
  );
}
