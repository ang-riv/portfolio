import "./style.css";
import Navigation from "./Navigation.js";
import React, { useRef } from "react";
import IntroSection from "./IntroSection.js";
import AboutSection from "./AboutSection.js";
import SkillsSection from "./SkillsSection.js";
import ProjectsSection from "./ProjectsSection.js";
import ContactSection from "./ContactSection.js";

// global colors to keep things consistent

const colors = {
  pink: "#ffcccc",
  green: "ccffcc",
  purple: "#ccccff",
  yellow: "#f2e589",
  blue: "#9fd1ff",
};

function App() {
  const mobileTest = false;
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Navigation
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <IntroSection ref={introRef} />
      <AboutSection ref={aboutRef} />
      {mobileTest && (
        <>
          <SkillsSection ref={skillsRef} />
          <ProjectsSection ref={projectsRef} />
          <ContactSection ref={contactRef} />
        </>
      )}
    </div>
  );
}

export default App;
