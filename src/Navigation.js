import React from "react";
import useWindowSize from "./useWindowSize";
import { QuestionMarkIcon, GearIcon, CodeIcon, SpeechIcon } from "./Icons";

const Navigation = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
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
              {refCopy.map((section) => (
                <li onClick={() => scrollToSection(section.ref)}>
                  {section.title}
                </li>
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
