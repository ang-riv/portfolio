import React from "react";
import ProjectTile from "./ProjectTile";
import { addColors } from "../../utils/colorData";
import { addImgs } from "../../utils/imgData";
import SectionTitles from "../../components/SectionTitles";

const ProjectsSection = React.forwardRef(({ id }, ref) => {
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
      title: "Tip Calculator",
      badges: ["React", "TailwindCSS"],
      description:
        "Web app that takes the user's bill amount, desired tip percent, and number of people to split the bill. Using that info, it calculates the split total and tip amount that each person will pay.",
      img: null,
      color: null,
      link: "https://ang-riv.github.io/tip-calculator/",
      imgAlt: "image preview of a website for tip calculator",
    },
    {
      title: "GitHub Repo Gallery",
      badges: ["JavaScript", "GitHub", "API"],
      description:
        "Personal web app that showcases all my GitHub repositories using the GitHub API. Clicking on a repo title takes the user to that specific repo on GitHub.",
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
  ];

  addColors(projectInfo);
  addImgs(projectInfo);

  return (
    <section ref={ref} id={id} style={{ height: "fit-content" }}>
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
