import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/** project informations passed from Portfolio component */}
        <div
          className="flip-card-front"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <h3>{project.name} </h3>
        </div>
        <div className="flip-card-back">
          <h3>{project.name} </h3>
          <span>About :</span>
          <p>{project.about} </p>
          <span>Built with</span>
          <ul>
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              Code
            </a>
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
