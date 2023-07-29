import React from 'react';

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2>Projects</h2>
      {/* Repeat this div for each project you want to display */}
      <div className="project">
        <img src="project-image.jpg" alt="Project" />
        <h3>Project Name</h3>
        <p>Project description</p>
        <div className="project-links">
          <a href="project-link">View Project</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
