import React from "react";

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

// puzzle in the intro section
export function IntroPuzzle() {
  const pink = "#FFAFAF";
  const green = "#CCFFCC";
  const purple = "#BCBCFF";
  const yellow = "#F2E589";

  return (
    <>
      <ColorPieces
        fillColor={pink}
        size="14em"
        style={{ transform: "rotate(90deg)" }}
      />
      <ColorPieces
        fillColor={green}
        size="14em"
        style={{ transform: "rotate(-180deg)", marginBottom: "1.3em" }}
      />
      <ColorPieces
        fillColor={purple}
        size="14em"
        style={{ marginLeft: "1.4em" }}
      />
      <ColorPieces
        fillColor={yellow}
        size="14em"
        style={{
          transform: "rotate(-90deg)",
          marginBottom: "1.3em",
        }}
      />
    </>
  );
}

// puzzle in the skills section
export function SkillPuzzle() {
  const html = "";
  const css = "";
  const js = "";
  const git = "";

  return (
    <>
      <ColorPieces fillColor="orange" size="12em" />
      <ColorPieces fillColor="blue" size="12em" />
      <ColorPieces fillColor="yellow" size="12em" />
      <ColorPieces fillColor="blue" size="12em" />
      <ColorPieces fillColor="purple" size="12em" />
    </>
  );
}
