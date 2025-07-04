import "./style.css";
import React, { useRef } from "react";
import Navigation from "./sections/Navigation/Navigation";
import IntroSection from "./sections/Intro/IntroSection";
import AboutSection from "./sections/About/AboutSection";
import SkillsSection from "./sections/Skills/SkillsSection";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import ContactSection from "./sections/Contact/ContactSection";

function App() {
  const test = false;
  const sectionTitles = ["intro", "skills", "about", "projects", "contact"];

  // creates refs to scroll sections
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

  // section components assigned to refs
  const componentNames = [
    IntroSection,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
  ];

  return (
    <>
      <main>
        <Navigation {...refProps} />
        {Object.keys(refProps).map((key, index) => {
          const Component = componentNames[index]; // Get the corresponding component
          const sectionID = sectionTitles[index];
          return <Component key={key} id={sectionID} ref={refProps[key]} />;
        })}
      </main>
    </>
  );
}

export default App;
