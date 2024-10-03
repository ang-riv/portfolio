import "./style.css";
import Navigation from "./Navigation.js";
import React, { useRef } from "react";
import IntroSection from "./IntroSection.js";
import AboutSection from "./AboutSection.js";
import SkillsSection from "./SkillsSection.js";
import ProjectsSection from "./ProjectsSection.js";
import ContactSection from "./ContactSection.js";

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
      <SkillsSection ref={skillsRef} />
      <ProjectsSection ref={projectsRef} />

      {mobileTest && (
        <>
          <AboutSection ref={aboutRef} />
          <ContactSection ref={contactRef} />
        </>
      )}
    </div>
  );
}

export default App;
