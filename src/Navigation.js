import React from "react";
import useWindowSize from "./useWindowSize";
import { QuestionMarkIcon, GearIcon, CodeIcon, SpeechIcon } from "./Icons";

const Navigation = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  // scrolling to a specific section using refs
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const size = useWindowSize();
  return (
    <>
      {size.width > 600 ? (
        <div className="nav-container">
          <nav>
            <ul>
              <li onClick={() => scrollToSection(aboutRef)}>About</li>
              <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
              <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
              <li onClick={() => scrollToSection(contactRef)}>Contact</li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="mobile-nav-container">
          <ul>
            <li onClick={() => scrollToSection(aboutRef)}>
              <QuestionMarkIcon />
              <p>About</p>
            </li>
            <li onClick={() => scrollToSection(skillsRef)}>
              <GearIcon />
              <p>Skills</p>
            </li>
            <li onClick={() => scrollToSection(projectsRef)}>
              <CodeIcon />
              <p>Projects</p>
            </li>
            <li onClick={() => scrollToSection(contactRef)}>
              <SpeechIcon />
              <p>Contact</p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
