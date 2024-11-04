import React, { useState } from "react";
import { motion } from "framer-motion";
import useWindowSize from "./useWindowSize";
import { QuestionMarkIcon, GearIcon, CodeIcon, SpeechIcon } from "./Icons";

const Navigation = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  // hover effects to check which element is being hovered
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
  return (
    <>
      {size.width > 600 ? (
        <div className="nav-container">
          <nav>
            <ul>
              {refCopy.map((section) =>
                section.title !== "Contact" ? (
                  <motion.li
                    key={section.title}
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
                ) : (
                  <motion.li
                    className="contact-style"
                    key={section.title}
                    onClick={() => scrollToSection(section.ref)}
                    onHoverStart={() => setIsHovered(section.title)}
                    onHoverEnd={() => setIsHovered("")}
                    animate={{
                      backgroundColor:
                        isHovered === section.title
                          ? ["hsl(208.8, 100, 81.2)", "hsl(208.5, 100, 56.3)"]
                          : "hsl(208.8, 100, 81.2)",
                    }}
                  >
                    {section.title}
                  </motion.li>
                )
              )}
            </ul>
          </nav>
        </div>
      ) : (
        <div className="mobile-nav-container">
          <ul>
            {refCopy.map((section) => (
              <li
                key={section.title}
                onClick={() => scrollToSection(section.ref)}
              >
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
