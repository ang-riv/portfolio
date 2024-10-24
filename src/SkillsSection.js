import React from "react";
import { SkillsSectionPuzzle } from "./Icons";
const SkillsSection = React.forwardRef((_, ref) => {
  return (
    <section ref={ref} className="skill-section">
      <h2>Skills</h2>
      <div className="skills-content-wrapper">
        <SkillsSectionPuzzle />
      </div>
    </section>
  );
});

export default SkillsSection;
