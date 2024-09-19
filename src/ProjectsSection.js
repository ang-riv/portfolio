import React from "react";
import ProjectTile from "./ProjectTile.js";

const ProjectsSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} style={{ height: "fit-content" }}>
      <h2>Projects</h2>
      <div
        className="content-wrapper"
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            width: "90%",
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            gap: "20px 40px",
          }}
        >
          <ProjectTile
            title="Unplugged"
            description="Short paragraph that has like one to three sentences. Cool sentence
          here. Super cool sentence."
            img=""
            color="#9FD1FF"
          />
          <ProjectTile
            title="Unplugged"
            description="Short paragraph that has like one to three sentences. Cool sentence
          here. Super cool sentence."
            img=""
            color="#FFAFAF"
          />
          <ProjectTile
            title="Unplugged"
            description="Short paragraph that has like one to three sentences. Cool sentence
          here. Super cool sentence."
            img=""
            color="#F2E589"
          />
          <ProjectTile
            title="Unplugged"
            description="Short paragraph that has like one to three sentences. Cool sentence
          here. Super cool sentence."
            img=""
            color="#CCFFCC"
          />
          <ProjectTile
            title="Unplugged"
            description="Short paragraph that has like one to three sentences. Cool sentence
          here. Super cool sentence."
            img=""
            color="#BCBCFF"
          />
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;
