import React from "react";
import ProjectTile from "./ProjectTile";

const ProjectsSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} style={{ height: "85vh" }}>
      <h2>Projects</h2>
      <div
        className="content-wrapper"
        style={{
          height: "100%",
          width: "100%",
          outline: "1px dotted green",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "80%", outline: "1px dotted grey" }}>
          <ProjectTile />
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;
