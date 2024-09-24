import React from "react";
import useWindowSize from "./useWindowSize";

const Navigation = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  // scrolling to a specific section using refs
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const size = useWindowSize();
  return (
    <div className="navContainer">
      {size.width > 600 ? (
        <nav>
          <ul>
            <li onClick={() => scrollToSection(aboutRef)}>About</li>
            <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
            <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
            <li onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>
        </nav>
      ) : (
        <h2>mobile nav</h2>
      )}
    </div>
  );
};

export default Navigation;
