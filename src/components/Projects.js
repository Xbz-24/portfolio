import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of Project 1',
    imageUrl: 'project1.jpg',
    liveUrl: 'https://example.com/project1',
    githubUrl: 'https://github.com/your-username/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of Project 2',
    imageUrl: 'project2.jpg',
    liveUrl: 'https://example.com/project2',
    githubUrl: 'https://github.com/your-username/project2',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div className="project" key={project.id}>
            <h3>{project.title}</h3>
            <img src={project.imageUrl} alt={project.title} />
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
