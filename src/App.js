import "./style.css";
import React, { useState, useRef, useEffect } from "react";
import Navigation from "./Navigation.js";
import IntroSection from "./IntroSection.js";
import AboutSection from "./AboutSection.js";
import SkillsSection from "./SkillsSection.js";
import ProjectsSection from "./ProjectsSection.js";
import ContactSection from "./ContactSection.js";
import {
  motion,
  useInView,
  useAnimation,
  inView,
  animate,
} from "framer-motion";
import SectionTitles from "./SectionTitles.js";

function App() {
  const animateTest = false;
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const scrollRef = useRef(null);

  return (
    <div className="App">
      {animateTest ? (
        <>
          <ProjectsSection ref={projectsRef} />
          <ContactSection ref={contactRef} />
        </>
      ) : (
        <>
          <Navigation
            aboutRef={aboutRef}
            skillsRef={skillsRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
          <IntroSection ref={introRef} />
          <SkillsSection ref={skillsRef} scrollRef={scrollRef} />
          <AboutSection ref={aboutRef} />
        </>
      )}
    </div>
  );
}

export default App;
