import React from "react";
import ProjectTile from "./ProjectTile.js";
import { addColors, addImgs } from "./Imports.js";
import SectionTitles from "./SectionTitles.js";

const ProjectsSection = React.forwardRef((_, ref) => {
  // individual project info
  const projectInfo = [
    {
      title: "Unplugged",
      description:
        "A multi-page website about Unplugged, a work retreat. Created with a mobile-first design in mind and with Flexbox and media queries.",
      img: null,
      color: null,
      link: "https://ang-riv.github.io/unplugged/",
      imgAlt: "image preview of work retreat website",
    },
    {
      title: "Potluck Generator",
      description:
        "A website that takes guest names and assigns them a random recipe. Uses React Bootstrap for styling and the spoonacular API for the random recipes.",
      img: null,
      color: null,
      link: "",
      imgAlt: "image preview of potluck recipe generator website",
    },
    {
      title: "Github Repo Gallery",
      description:
        "A personalized website that showcases all my Github Repos. Want more information? Click on each repo to be taken to my Github.",
      img: null,
      color: null,
      link: "https://ang-riv.github.io/gh-repo-gallery/",
      imgAlt: "image preview of github repo gallery",
    },
    {
      title: "Sticky Note App",
      description:
        "An app that allows users to write on sticky notes and track of all their to-dos. Created with React and features a dynamic search bar to look for sticky notes with the entered word(s).",
      img: null,
      color: null,
      imgAlt: "image preview of sticky note application",
    },
    {
      title: "Rogue Pickings",
      description:
        "A single-page website for a food truck called Rogue Pickings. Focuses on being responsive through the use of Flexbox and responsive typography.",
      img: null,
      color: null,
      link: "https://ang-riv.github.io/responsive-rouge-pickings/",
      imgAlt: "image preview of a website for a food truck",
    },
  ];

  // add in the colors + imgs to the tiles
  addColors(projectInfo);
  addImgs(projectInfo);

  return (
    <section ref={ref} style={{ height: "fit-content" }}>
      <SectionTitles title="Projects" />
      <div className="project-content-wrapper">
        <div className="project-container">
          {projectInfo.map((project) => (
            <ProjectTile {...project} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;
