import React from "react";
import ProjectTile from "./ProjectTile.js";
import unplugged from "./assets/project-imgs/unplugged.png";
import potluck from "./assets/project-imgs/potluck-generator.png";
import rogue from "./assets/project-imgs/rogue-pickings.png";
import ProjectTileGrid from "./ProjectTileGrid.js";

const ProjectsSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} style={{ height: "fit-content" }}>
      <h2>Projects</h2>
      <div className="project-content-wrapper2">
        <div className="project-container">
          <ProjectTileGrid
            title="Unplugged"
            description="A multi-page website about Unplugged, a work retreat. Created with a mobile-first design in mind and with Flexbox and media queries."
            img={unplugged}
            color="#9FD1FF"
          />
          <ProjectTileGrid
            title="Potluck Generator"
            description="A website that takes guest names and assigns them a random recipe. Uses React Bootstrap for styling and the spoonacular API for the random recipes."
            img={potluck}
            color="#FFAFAF"
          />
          <ProjectTileGrid
            title="Github Repo Gallery"
            description="A personalized website that showcases all my Github Repos. Want more information? Click on each repo to be taken to my Github."
            img=""
            color="#F2E589"
          />
          <ProjectTileGrid
            title="Sticky Note App"
            description="An app that allows users to write on sticky notes and track of all their to-dos. Created with React and features a dynamic search bar to look for sticky notes with the entered word(s)."
            img=""
            color="#CCFFCC"
          />
          <ProjectTileGrid
            title="Rogue Pickings"
            description="A single-page website for a food truck called Rogue Pickings. Focuses on being responsive through the use of Flexbox and responsive typography."
            img={rogue}
            color="#BCBCFF"
          />
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;
