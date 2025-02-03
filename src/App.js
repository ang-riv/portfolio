import "./style.css";
import React, { useRef } from "react";
import Navigation from "./Navigation/Navigation.js";
import IntroSection from "./Intro/IntroSection.js";
import AboutSection from "./About/AboutSection.js";
import SkillsSection from "./SkillsSection.js";
import ProjectsSection from "./ProjectsSection.js";
import ContactSection from "./ContactSection.js";
//import TestPage from "./TestPage.js";

function App() {
  const sectionTitles = ["intro", "skills", "about", "projects", "contact"];

  // creating refs to scroll to the right sections
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

  // section components to assign the refs to
  const componentNames = [
    IntroSection,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
  ];

  return (
    <div className="App">
      <Navigation {...refProps} />
      {Object.keys(refProps).map((key, index) => {
        const Component = componentNames[index]; // Get the corresponding component
        return <Component key={key} ref={refProps[key]} />;
      })}
    </div>
  );
}

export default App;
