import React, { useState } from "react";
import { motion } from "framer-motion";
import useWindowSize from "../../components/useWindowSize";
import { mobileNavIcons } from "../../assets/mobile-nav-icons";
import { globalColors } from "../../utils/colorData";
const Navigation = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  const [isHovered, setIsHovered] = useState("");

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

  // icons for mobile
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
              {sectionInfo.map((section) => {
                const semanticLink = `#${section.title.toLowerCase()}`;
                return section.title !== "Contact" ? (
                  <motion.li
                    key={section.title}
                    onClick={() => scrollToSection(section.ref)}
                    onHoverStart={() => setIsHovered(section.title)}
                    onHoverEnd={() => setIsHovered("")}
                  >
                    <a href={semanticLink}></a>
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
                );
              })}
            </ul>
          </nav>
        </div>
      ) : (
        <div className="mobile-nav-container">
          <ul>
            {sectionInfo.map((section) => {
              const semanticLink = `#${section.title.toLowerCase}`;
              return (
                <li
                  key={section.title}
                  onClick={() => scrollToSection(section.ref)}
                >
                  <a href={semanticLink}></a>
                  {section.icon}
                  <p>{section.title}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
