import "./style.css";
import React, { useState, useRef } from "react";
import Navigation from "./Navigation.js";
import IntroSection from "./IntroSection.js";
import AboutSection from "./AboutSection.js";
import SkillsSection from "./SkillsSection.js";
import ProjectsSection from "./ProjectsSection.js";
import ContactSection from "./ContactSection.js";
import { motion } from "framer-motion";

function App() {
  const [animateTest, setAnimateTest] = useState(false);
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="App">
      {animateTest ? (
        <>
          <Navigation
            aboutRef={aboutRef}
            skillsRef={skillsRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
          <IntroSection ref={introRef} />
          <AboutSection ref={aboutRef} />
          <SkillsSection ref={skillsRef} />
          <ProjectsSection ref={projectsRef} />
          <ContactSection ref={contactRef} />
        </>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <motion.div
            style={{
              height: "150px",
              width: "150px",
              backgroundColor: "lavender",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.h2
            style={{ width: "calc-size(fit-content, size + 50px)" }}
            whileHover={{ borderBottom: "3px solid lightBlue" }}
          >
            Testing
          </motion.h2>
          <motion.h3
            style={{
              position: "relative",
              display: "inline-block",
              fontSize: "24px",
              color: "#333",
              paddingBottom: "4px",
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            Hover over me
            <motion.div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "2px",
                width: "100%",
                backgroundColor: " blue",
                transformOrigin: "left",
              }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.h3>
        </div>
      )}
    </div>
  );
}

export default App;
