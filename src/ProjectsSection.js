import React from "react";
import ProjectTile from "./ProjectTile.js";

const ProjectsSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} style={{ height: "fit-content" }}>
      <h2>Projects</h2>
      <div className="project-content-wrapper">
        <div className="project-container">
          <ProjectTile
            title="Unplugged"
            description="A multi-page website about Unplugged, a work retreat. Created with a mobile-first design in mind and with Flexbox and media queries."
            img=""
            color="#9FD1FF"
          />
          <ProjectTile
            title="Potluck Generator"
            description="A website that takes guest names and assigns them a random recipe. Uses React Bootstrap for styling and the spoonacular API for the random recipes."
            img=""
            color="#FFAFAF"
          />
          <ProjectTile
            title="Github Repo Gallery"
            description="A personalized website that showcases all my Github Repos. Want more information? Click on each repo to be taken to my Github."
            img=""
            color="#F2E589"
          />
          <ProjectTile
            title="Sticky Note App"
            description="An app that allows users to write on sticky notes and track of all their to-dos. Created with React and features a dynamic search bar to look for sticky notes with the entered word(s)."
            img=""
            color="#CCFFCC"
          />
          <ProjectTile
            title="Rogue Pickings"
            description="A single-page website for a food truck called Rogue Pickings. Focuses on being responsive through the use of Flexbox and responsive typography."
            img=""
            color="#BCBCFF"
          />
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;
