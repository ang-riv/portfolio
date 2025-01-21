import "./style.css";
import React, { useEffect, useRef } from "react";
import Navigation from "./Navigation.js";
import IntroSection from "./IntroSection.js";
import AboutSection from "./AboutSection.js";
import SkillsSection from "./SkillsSection.js";
import ProjectsSection from "./ProjectsSection.js";
import ContactSection from "./ContactSection.js";
import { object } from "framer-motion/client";
//import TestPage from "./TestPage.js";

function App() {
  const sectionTitles = ["intro", "skills", "about", "projects", "contact"];

  const sectionRefs = useRef(
    Object.fromEntries(sectionTitles.map((key) => [key, React.createRef()]))
  );

  const refProps = {
    introRef: sectionRefs.current.intro,
    aboutRef: sectionRefs.current.about,
    skillsRef: sectionRefs.current.skills,
    projectsRef: sectionRefs.current.projects,
    contactRef: sectionRefs.current.contact,
  };

  return (
    <div className="App">
      <Navigation {...refProps} />
      <IntroSection ref={refProps.introRef} />
      <SkillsSection ref={refProps.skillsRef} />
      <AboutSection ref={refProps.aboutRef} />
      <ProjectsSection ref={refProps.projectsRef} />
      <ContactSection ref={refProps.contactRef} />
    </div>
  );
}

export default App;
