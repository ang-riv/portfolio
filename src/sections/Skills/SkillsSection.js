import React from "react";
import SkillsSectionPuzzle from "../../components/PuzzleAnimations/SkillsPuzzles";
import SectionTitles from "../../components/SectionTitles";
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
