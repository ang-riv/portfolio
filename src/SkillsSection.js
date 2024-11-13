import React from "react";
import { SkillsSectionPuzzle } from "./Icons";
import SectionTitles from "./SectionTitles";
const SkillsSection = React.forwardRef((_, ref, scrollRef) => {
  return (
    <section ref={ref} className="skill-section">
      <SectionTitles title="Skills" ref={scrollRef} />
      <div className="skills-content-wrapper">
        <SkillsSectionPuzzle />
      </div>
    </section>
  );
});

export default SkillsSection;
