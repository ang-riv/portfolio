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

export function CssLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6em"
      height="6em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#1572b6"
        d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30z"
      ></path>
      <path fill="#33a9dc" d="m16 27.858l8.17-2.265l1.922-21.532H16z"></path>
      <path
        fill="#fff"
        d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16z"
      ></path>
      <path
        fill="#ebebeb"
        d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004z"
      ></path>
      <path
        fill="#fff"
        d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007z"
      ></path>
      <path
        fill="#ebebeb"
        d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829z"
      ></path>
    </svg>
  );
}

export function JSLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5em"
      height="5em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="#f7df1e" d="M0 0h256v256H0z"></path>
      <path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"></path>
    </svg>
  );
}

export function GHLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6em"
      height="6em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="white"
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      ></path>
    </svg>
  );
}

export function LogoPuzzle() {
  return (
    <div style={{ width: "50%", height: "90%", outline: "1px dotted green" }}>
      {/* html piece */}
      <Puzzle color1="#e44d26" color2="#1572b6" color3="#f7df1e" size="14em" />
      <div style={{ position: "relative", bottom: "86%", left: "8%" }}>
        <HtmlLogo />
      </div>
      <div style={{ position: "relative", bottom: "113%", left: "59%" }}>
        <CssLogo />
      </div>
      <div style={{ position: "relative", bottom: "70%", left: "12%" }}>
        <JSLogo />
      </div>
      <div style={{ position: "relative", bottom: "90%", left: "64%" }}>
        <GHLogo />
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
