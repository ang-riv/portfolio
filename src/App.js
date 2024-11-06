import "./style.css";
import React, { useState, useRef, useEffect } from "react";
import Navigation from "./Navigation.js";
import IntroSection from "./IntroSection.js";
import AboutSection from "./AboutSection.js";
import SkillsSection from "./SkillsSection.js";
import ProjectsSection from "./ProjectsSection.js";
import ContactSection from "./ContactSection.js";
import { motion, useInView, useAnimation } from "framer-motion";
import SectionTitles from "./SectionTitles.js";

function App() {
  const animateTest = false;
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-15%",
  });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  const [isHovered, setIsHovered] = useState(false);
  const [sectionName, setSectionName] = useState("none");
  console.log(sectionName);
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
          <SkillsSection ref={skillsRef} />
          <div
            style={{
              outline: "1px dotted green",
              height: "100vh",
              width: "100vh",
            }}
          >
            <motion.h2
              ref={ref}
              style={{
                textAlign: "center",
                width: "calc-size(fit-content, size + 50px)",
                height: "fit-content",
              }}
            >
              Testing Title!
              <motion.div
                style={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "cornflowerBlue",
                  transformOrigin: "left",
                }}
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1 }}
              />
            </motion.h2>
            <motion.h2
              style={{
                textAlign: "center",
                width: "calc-size(fit-content, size + 50px)",
                height: "fit-content",
              }}
            >
              Title!
              <motion.div
                style={{
                  height: "2px",
                  width: "100%",
                  backgroundColor: "cornflowerBlue",
                  transformOrigin: "left",
                }}
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1 }}
              />
            </motion.h2>
            <SectionTitles title="About" />
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
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "35px",
                  outline: "1px solid pink",
                }}
                ref={ref}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 0.5 }}
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
              </motion.div>
              <div>
                <motion.li
                  style={{
                    position: "relative",
                    display: "inline-block",
                    fontSize: "24px",
                    color: "#333",
                    paddingBottom: "4px",
                    width: "calc-size(fit-content, size + 35px)",
                  }}
                  onHoverStart={() => {
                    setIsHovered(true);
                    setSectionName("item1");
                  }}
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
                      backgroundColor: " #9fd1ff",
                      transformOrigin: "left",
                    }}
                    initial={false}
                    animate={{ scaleX: sectionName === "item1" ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.li>
              </div>
              <div>
                <motion.li
                  style={{
                    position: "relative",
                    display: "inline-block",
                    fontSize: "24px",
                    color: "#333",
                    paddingBottom: "4px",
                    width: "calc-size(fit-content, size + 35px)",
                  }}
                  onHoverStart={() => {
                    setIsHovered(true);
                    setSectionName("item2");
                  }}
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
                </motion.li>
              </div>
              <h4>{sectionName}</h4>
            </div>
          </div>
          <AboutSection ref={aboutRef} />
        </>
      )}
    </div>
  );
}

export default App;
