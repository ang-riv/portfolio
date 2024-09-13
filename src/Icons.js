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
  return (
    <div style={{ outline: "1px dotted green" }}>
      <img
        styles={{ width: "15%", height: "15%" }}
        src={htmlPiece}
        alt="puzzle piece with the word HTML"
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
      <img src={githubPiece} alt="puzzle piece with the word Github"></img>
    </div>
  );
}
