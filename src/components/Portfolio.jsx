import React from "react";
import ProjectCard from "./Portfolio.Card";
import "../styles/Portfolio.scss";
import Projects from "./Portfolio.projects";

export default function Portfolio() {
  return (
    <div className="portfolio" id="Portfolio">
      <h2 className="port-title">PORTFOLIO.</h2>

      {/**ProjectCards are generated from projects */}

      <div className="projects">
        {Projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
