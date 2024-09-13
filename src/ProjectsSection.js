import React from "react";
import ProjectTile from "./ProjectTile";

const ProjectsSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} style={{ height: "90vh" }}>
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
            width: "90%",
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            gap: "5px 25px",
          }}
        >
          <ProjectTile title="" description="" img="" color="" />
          <ProjectTile />
          <ProjectTile />
          <ProjectTile />
          <ProjectTile />
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;
