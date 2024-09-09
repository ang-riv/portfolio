import React from "react";

const Navigation = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  // scrolling to a specific section using refs
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // TODO: move all of these into the css file
  const containerStyles = {
    "margin-top": "1em",
    height: "3em",
    display: "flex",
    "justify-content": "end",
    "align-items": "center",
  };

  const ulStyle = {
    display: "flex",
    "justify-content": "end",
    "align-items": "center",
  };
  const linkStyles = {
    marginRight: "3em",
    fontWeight: "bolder",
    fontSize: "1.3em",
    "list-style-type": "none",
  };

  const contactStyle = {
    backgroundColor: "#9FD1FF",
    marginRight: "2.5em",
    padding: "0.25em 1.3em",
    borderRadius: "0.938em",
    fontWeight: "bolder",
    fontSize: "1.3em",
    listStyleType: "none",
  };

  return (
    <div style={containerStyles}>
      <nav>
        <ul style={ulStyle}>
          <li style={linkStyles} onClick={() => scrollToSection(aboutRef)}>
            About
          </li>
          <li style={linkStyles} onClick={() => scrollToSection(skillsRef)}>
            Skills
          </li>
          <li style={linkStyles} onClick={() => scrollToSection(projectsRef)}>
            Projects
          </li>
          <li style={contactStyle} onClick={() => scrollToSection(contactRef)}>
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
