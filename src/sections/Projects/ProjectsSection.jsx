import React from "react";
import ProjectTile from "./ProjectTile";
import { addColors } from "../../utils/colorData";
import { addImgs } from "../../utils/imgData";
import SectionTitles from "../../components/SectionTitles";

const ProjectsSection = React.forwardRef((_, ref) => {
  // individual project info
  const projectInfo = [
    {
      title: "Dinner Party Generator",
      badges: ["React", "TailwindCSS", "API"],
      description:
        "Web app that generates a printable menu. Users can input guests who will be assigned a random dish for the party. Dishes can be filtered by inputting specific diet restrictions and allergies.",
      img: null,
      color: null,
      link: "https://ang-riv.github.io/dinner-party-generator/",
      imgAlt: "image preview of dinner party generator website",
    },
    {
      title: "Sticky Note App",
      badges: ["React", "Responsive Typography"],
      description:
        "Web app where users can create, edit, filter, and search through colorful sticky notes. These notes are saved into the user's local storage.",
      img: null,
      color: null,
      link: "https://ang-riv.github.io/sticky-notes/",
      imgAlt: "image preview of sticky note application",
    },

    {
      title: "Github Repo Gallery",
      badges: ["React", "Github", "API"],
      description:
        "Personal web app that showcases all my Github repositories using the Github API. Clicking on each repo title takes the user to that specific repo on Github.",
      img: null,
      color: null,
      link: "https://ang-riv.github.io/gh-repo-gallery/",
      imgAlt: "image preview of github repo gallery",
    },
    {
      title: "Unplugged",
      badges: ["Flexbox", "Media Queries"],
      description:
        "Multi-page website containing all info on Unplugged, a work retreat. Contains a homepage, FAQ, and about section.",
      img: null,
      color: null,
      link: "https://ang-riv.github.io/unplugged/",
      imgAlt: "image preview of work retreat website",
    },
    {
      title: "Rogue Pickings",
      badges: ["Flexbox", "Responsive Typography"],
      description:
        "Single-page informational website on a food truck service named Rouge Pickings. Includes an introduction, the truck's current specials, a customer review, and contact.",
      img: null,
      color: null,
      link: "https://ang-riv.github.io/responsive-rouge-pickings/",
      imgAlt: "image preview of a website for a food truck",
    },
  ];

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
