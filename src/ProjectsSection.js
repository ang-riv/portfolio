import React from "react";
import unplugged from "./assets/project-imgs/unplugged.png";
import potluck from "./assets/project-imgs/potluck-generator.png";
import rogue from "./assets/project-imgs/rogue-pickings.png";
import gallery from "./assets/project-imgs/gh-gallery.png";
import notes from "./assets/project-imgs/sticky-notes.png";
import ProjectTile from "./ProjectTile.js";
import { globalColors } from "./Imports.js";

const ProjectsSection = React.forwardRef((props, ref) => {
  // individual project info + props
  const project1Props = {
    title: "Unplugged",
    description:
      "A multi-page website about Unplugged, a work retreat. Created with a mobile-first design in mind and with Flexbox and media queries.",
    img: unplugged,
    color: globalColors.blue,
    link: "https://ang-riv.github.io/unplugged/",
    imgAlt: "image preview of work retreat website",
  };

  const project2Props = {
    title: "Potluck Generator",
    description:
      "A website that takes guest names and assigns them a random recipe. Uses React Bootstrap for styling and the spoonacular API for the random recipes.",
    img: potluck,
    color: globalColors.pink,
    link: "",
    imgAlt: "image preview of potluck recipe generator website",
  };

  const project3Props = {
    title: "Github Repo Gallery",
    description:
      "A personalized website that showcases all my Github Repos. Want more information? Click on each repo to be taken to my Github.",
    img: gallery,
    color: globalColors.yellow,
    link: "https://ang-riv.github.io/gh-repo-gallery/",
    imgAlt: "image preview of github repo gallery",
  };

  const project4Props = {
    title: "Sticky Note App",
    description:
      "An app that allows users to write on sticky notes and track of all their to-dos. Created with React and features a dynamic search bar to look for sticky notes with the entered word(s).",
    img: notes,
    color: globalColors.green,
    imgAlt: "image preview of sticky note application",
  };

  const project5Props = {
    title: "Rogue Pickings",
    description:
      "A single-page website for a food truck called Rogue Pickings. Focuses on being responsive through the use of Flexbox and responsive typography.",
    img: rogue,
    color: globalColors.purple,
    link: "https://ang-riv.github.io/responsive-rouge-pickings/",
    imgAlt: "image preview of a website for a food truck",
  };

  const projectArr = [
    project1Props,
    project2Props,
    project3Props,
    project4Props,
    project5Props,
  ];

  return (
    <section ref={ref} style={{ height: "fit-content" }}>
      <h2>Projects</h2>
      <div className="project-content-wrapper">
        <div className="project-container">
          {projectArr.map((project) => (
            <ProjectTile {...project} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;
