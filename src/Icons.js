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

// single puzzle with logo inside
export function LogoPiece(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13em"
      height="13em"
      viewBox="0 0 20 20"
      {...props}
    >
      {/* puzzle piece */}
      <circle cx={17} cy={10} r={3} fill="#e44d26"></circle>
      <path
        fill="#e44d26"
        d="M10.58 3A3 3 0 0 1 11 4.5a3 3 0 0 1-6 0A3 3 0 0 1 5.42 3H1v12a2 2 0 0 0 2 2h12V3z"
      ></path>
    </svg>
  );
}

// html logo
export function HtmlLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6em"
      height="6em"
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#e44d26"
        d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"
      ></path>
      <path fill="#f16529" d="m64 116.8l36.378-10.086l8.559-95.878H64z"></path>
      <path
        fill="#ebebeb"
        d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"
      ></path>
      <path
        fill="#fff"
        d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"
      ></path>
    </svg>
  );
}
export function Test() {
  return (
    <div style={{ width: "50%", height: "50%", outline: "1px dotted green" }}>
      {/* html piece */}
      <LogoPiece style={{ transform: "rotate(90deg)" }} />
      <div style={{ position: "relative", top: "-62%", left: "7%" }}>
        <HtmlLogo />
      </div>
    </div>
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
