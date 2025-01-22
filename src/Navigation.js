import React, { useState } from "react";
import { motion } from "framer-motion";
import useWindowSize from "./useWindowSize";
import { mobileNavIcons } from "./MobileIcons";
import { globalColors } from "./Imports";
const Navigation = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  // hover effects to check which element is being hovered
  const [isHovered, setIsHovered] = useState("");

  // scrolling to a specific section using refs
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // for rendering mobile or desktop nav
  const size = useWindowSize();

  const sectionTitles = ["About", "Skills", "Projects", "Contact"];
  const sectionRefs = [aboutRef, skillsRef, projectsRef, contactRef];
  const sectionInfo = [];

  // icons are only for mobile
  for (let i = 0; i < sectionTitles.length; i++) {
    sectionInfo.push({
      title: sectionTitles[i],
      ref: sectionRefs[i],
      icon: mobileNavIcons[i],
    });
  }
  return (
    <>
      {size.width > 600 ? (
        <div className="nav-container">
          <nav>
            <ul>
              {sectionInfo.map((section) =>
                section.title !== "Contact" ? (
                  <motion.li
                    key={section.title}
                    onClick={() => scrollToSection(section.ref)}
                    onHoverStart={() => setIsHovered(section.title)}
                    onHoverEnd={() => setIsHovered("")}
                  >
                    {section.title}
                    {/* underline titles */}
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
                          ? `${globalColors.blue}`
                          : "#FFFFFF",
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
            {sectionInfo.map((section) => (
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
