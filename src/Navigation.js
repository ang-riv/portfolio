import React from "react";

function Navigation() {
  const containerStyles = {
    "margin-top": "1em",
    height: "3em",
    display: "flex",
    "flex-direction": "",
    "justify-content": "end",
    "align-items": "center",
  };
  const linkStyles = {
    "margin-right": "3em",
  };

  const contactStyle = {
    "background-color": "#9FD1FF",
    "margin-right": "3em",
    padding: "0.25em 1.3em",
    "border-radius": "0.938em",
  };
  return (
    <div style={containerStyles}>
      <h3 style={linkStyles}>About</h3>
      <h3 style={linkStyles}>Skills</h3>
      <h3 style={linkStyles}>Projects</h3>
      <h3 style={contactStyle}>Contact</h3>
    </div>
  );
}

export default Navigation;
