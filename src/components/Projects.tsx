import React, { FC } from 'react';

import project1jpg from '../aca.jpg';
import mathy from "../mandelbrot.jpeg";
import blogger from "../download.png";
import crunchy from "../epa.png";
import manager from "../manager.jpeg";

const p1  = "https://github.com/Xbz-24/chess-app";
const p1_2  = "https://fabulous-kitsune-5c3a21.netlify.app/";
const blog = "https://github.com/Xbz-24/blog";
const blog2 = "https://blog-2e5.pages.dev/";
const mandel1 = "https://github.com/Xbz-24/mandelbrot-plot";

interface Project {
  image: string;
  alt: string;
  title: string;
  description: string;
  projectLink: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    image: project1jpg,
    alt: "ChessBoard",
    title: "Chess",
    description: "Webapp created in JS",
    projectLink: p1,
    liveLink: p1_2
  },
  {
    image: blogger,
    alt: "BlogProjectImage",
    title: "Blog",
    description: "Creation of a CRUD for holding blog posts",
    projectLink: blog,
    liveLink: blog2
  },
  {
    image: mathy,
    alt:"mathy image mandelbrot",
    title: "Mathematical Plotting",
    description: "Plotting of the mandelbrot set",
    projectLink: mandel1,
    liveLink: "" 
  },
  {
    image: crunchy,
    alt: "crunchyroll img",
    title: "Anime Site",
    description: "watching anime from the commodity of your home",
    projectLink: "",
    liveLink: ""
  },
  {
    image: manager,
    alt: "paswword manager img",
    title: "Password Manager",
    description: "desktop application using react native",
    projectLink: "",
    liveLink: ""
  }
];

const Projects: FC = () => {
  return (
    <div className="projects-container" id="projects">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <img src={project.image} alt={project.alt} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-links">
            {project.projectLink && <a href={project.projectLink}>View Project</a>}
            {project.liveLink && <a href={project.liveLink}>View Live</a>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
