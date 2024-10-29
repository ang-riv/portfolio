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
  const animateTest = false;
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
          <AboutSection ref={aboutRef} />
          <SkillsSection ref={skillsRef} />
          <ProjectsSection ref={projectsRef} />
          <ContactSection ref={contactRef} />
        </>
      ) : (
        <>
          <IntroSection ref={introRef} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              flexDirection: "column",
            }}
          >
            {/* maybe animate this when they are all connected*/}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "35px",
              }}
            >
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "35px",
                }}
                animate={{ y: 17.5 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <motion.div
                  style={{
                    outline: "3px solid black",
                    height: "100px",
                    width: "100px",
                    backgroundColor: "cornflowerBlue",
                  }}
                  animate={{ x: 17.5 }}
                  transition={{ delay: 1, duration: 1 }}
                ></motion.div>
                <motion.div
                  style={{
                    outline: "3px solid black",
                    height: "100px",
                    width: "100px",
                    backgroundColor: "lavender",
                  }}
                  animate={{ x: -17.5 }}
                  transition={{ delay: 1, duration: 1 }}
                ></motion.div>
              </motion.div>
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "35px",
                }}
                animate={{ y: -17.5 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <motion.div
                  style={{
                    outline: "3px solid black",

                    height: "100px",
                    width: "100px",
                    backgroundColor: "blanchedAlmond",
                  }}
                  animate={{ x: 17.5 }}
                  transition={{ delay: 1, duration: 1 }}
                ></motion.div>
                <motion.div
                  style={{
                    outline: "3px solid black",
                    height: "100px",
                    width: "100px",
                    backgroundColor: "lightPink",
                  }}
                  animate={{ x: -17.5 }}
                  transition={{ delay: 1, duration: 1 }}
                ></motion.div>
              </motion.div>
            </div>
            <div>
              <motion.h3
                style={{
                  position: "relative",
                  display: "inline-block",
                  fontSize: "24px",
                  color: "#333",
                  paddingBottom: "4px",
                  width: "calc-size(fit-content, size + 35px)",
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
                    backgroundColor: " lightBlue",
                    transformOrigin: "left",
                  }}
                  initial={false}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
