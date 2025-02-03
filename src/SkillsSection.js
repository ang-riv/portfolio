import React from "react";
import SkillsSectionPuzzle from "./PuzzleAnimations/SkillsPuzzles";
import SectionTitles from "./SectionTitles";
const SkillsSection = React.forwardRef((_, ref) => {
  return (
    <section ref={ref} className="skill-section">
      <SectionTitles title="Skills" />
      <div className="skills-content-wrapper">
        <SkillsSectionPuzzle />
      </div>
    </section>
  );
});

export default SkillsSection;
