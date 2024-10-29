import React, { useState } from "react";
import { motion } from "framer-motion";
import useWindowSize from "./useWindowSize";
import { QuestionMarkIcon, GearIcon, CodeIcon, SpeechIcon } from "./Icons";

const Navigation = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  // hover effects
  const [isHovered, setIsHovered] = useState("");

  // scrolling to a specific section using refs
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // for mobile or desktop nav
  const size = useWindowSize();

  const sectionRefs = [
    { title: "About", ref: aboutRef, icon: <QuestionMarkIcon /> },
    { title: "Skills", ref: skillsRef, icon: <GearIcon /> },
    { title: "Projects", ref: projectsRef, icon: <CodeIcon /> },
    { title: "Contact", ref: contactRef, icon: <SpeechIcon /> },
  ];

  const refCopy = [...sectionRefs];
  const styles = {
    width: "calc-size(fit-content, size + 25px)",
    textAlign: "center",
    position: "relative",
    top: "3px",
  };
  return (
    <>
      {size.width > 600 ? (
        <div className="nav-container">
          <nav>
            <ul>
              {refCopy.map((section) => (
                <motion.li
                  style={styles}
                  onClick={() => scrollToSection(section.ref)}
                  onHoverStart={() => setIsHovered(section.title)}
                  onHoverEnd={() => setIsHovered("")}
                >
                  {section.title}
                  <motion.div
                    style={{
                      height: "3px",
                      width: "100%",
                      backgroundColor: "#9fd1ff",
                      transformOrigin: "left",
                    }}
                    initial={false}
                    animate={{ scaleX: isHovered === section.title ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      ) : (
        <div className="mobile-nav-container">
          <ul>
            {refCopy.map((section) => (
              <li onClick={() => scrollToSection(section.ref)}>
                {section.icon}
                <p>{section.title}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
