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
    <>
      {size.width > 600 ? (
        <div className="navContainer">
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
        <div
          style={{
            height: "7%",
            width: "100%",
            backgroundColor: "lavender",
            position: "fixed",
            bottom: "0",
          }}
        >
          <p style={{ textAlign: "center" }}>mobile nav</p>
        </div>
      )}
    </>
  );
};

export default Navigation;
