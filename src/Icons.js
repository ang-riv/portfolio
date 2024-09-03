import React from "react";

// single puzzle piece for intro puzzle
export function ColorPieces(props, fillColor) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14em"
      height="14em"
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
      <ColorPieces fillColor={pink} style={{ transform: "rotate(90deg)" }} />
      <ColorPieces
        fillColor={green}
        style={{ transform: "rotate(-180deg)", marginBottom: "1.3em" }}
      />
      <ColorPieces fillColor={purple} style={{ marginLeft: "1.4em" }} />
      <ColorPieces
        fillColor={yellow}
        style={{
          transform: "rotate(-90deg)",
          marginBottom: "1.3em",
        }}
      />
    </>
  );
}
