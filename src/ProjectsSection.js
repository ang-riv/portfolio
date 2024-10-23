import React from "react";
import unplugged from "./assets/project-imgs/unplugged.png";
import potluck from "./assets/project-imgs/potluck-generator.png";
import rogue from "./assets/project-imgs/rogue-pickings.png";
import gallery from "./assets/project-imgs/gh-gallery.png";
import notes from "./assets/project-imgs/sticky-notes.png";
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
            img={unplugged}
            color="#9FD1FF"
            link="https://ang-riv.github.io/unplugged/"
            imgAlt="image preview of work retreat website"
          />
          <ProjectTile
            title="Potluck Generator"
            description="A website that takes guest names and assigns them a random recipe. Uses React Bootstrap for styling and the spoonacular API for the random recipes."
            img={potluck}
            color="#FFAFAF"
            link=""
            imgAlt="image preview of potluck recipe generator website"
          />
          <ProjectTile
            title="Github Repo Gallery"
            description="A personalized website that showcases all my Github Repos. Want more information? Click on each repo to be taken to my Github."
            img={gallery}
            color="#F2E589"
            link="https://ang-riv.github.io/gh-repo-gallery/"
            imgAlt="image preview of github repo gallery"
          />
          <ProjectTile
            title="Sticky Note App"
            description="An app that allows users to write on sticky notes and track of all their to-dos. Created with React and features a dynamic search bar to look for sticky notes with the entered word(s)."
            img={notes}
            color="#CCFFCC"
            imgAlt="image preview of sticky note application"
          />
          <ProjectTile
            title="Rogue Pickings"
            description="A single-page website for a food truck called Rogue Pickings. Focuses on being responsive through the use of Flexbox and responsive typography."
            img={rogue}
            color="#BCBCFF"
            link="https://ang-riv.github.io/responsive-rouge-pickings/"
            imgAlt="image preview of a website for a food truck"
          />
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;
