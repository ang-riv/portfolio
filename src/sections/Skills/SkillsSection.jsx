import React from "react";
import SkillsSectionPuzzle from "../../components/PuzzleAnimations/SkillsPuzzles";
import SectionTitles from "../../components/SectionTitles";
const SkillsSection = React.forwardRef(({ id }, ref) => {
  return (
    <section ref={ref} id={id} className="skill-section">
      <SectionTitles title="Skills" />
      <div className="skills-content-wrapper center-flex">
        <SkillsSectionPuzzle />
      </div>
    </section>
  );
});

export default SkillsSection;
