import "./style.css";
import { Icon } from "@iconify/react";
import Navigation from "./Navigation.js";
import React, { useRef } from "react";
import IntroSection from "./IntroSection.js";
function App() {
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
      <IntroSection ref={aboutRef} />
      <div style={{ height: "100vh", backgroundColor: "lightpink" }}>
        <h1>testing</h1>
      </div>
      <section id=""></section>
      <section id="about">about</section>
      <Icon icon="mdi-light:home" className="home-icon" color="red" />
    </div>
  );
}

export default App;
