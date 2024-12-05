import "./style.css";
import React, { useRef } from "react";
import Navigation from "./Navigation.js";
import IntroSection from "./IntroSection.js";
import AboutSection from "./AboutSection.js";
import SkillsSection from "./SkillsSection.js";
import ProjectsSection from "./ProjectsSection.js";
import ContactSection from "./ContactSection.js";
import TestPage from "./TestPage.js";

function App() {
  const animateTest = false;
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      {animateTest ? (
        <TestPage />
      ) : (
        <>
          <Navigation
            aboutRef={aboutRef}
            skillsRef={skillsRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
          <IntroSection ref={introRef} />
          <SkillsSection ref={skillsRef} />
          <AboutSection ref={aboutRef} />
          <ProjectsSection ref={projectsRef} />
          <ContactSection ref={contactRef} />
        </>
      )}
    </div>
  );
}

export default App;
