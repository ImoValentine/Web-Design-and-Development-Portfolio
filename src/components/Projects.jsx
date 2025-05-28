// src/components/Projects.jsx

import React from "react";
import "../App.css";
import ProjectCard from "./ProjectCard.jsx";

/*
  Since Vercel deploys the public folder by default, we reference images via absolute paths.
  For example: "/projects/project1/image1.jpg" refers to public/projects/project1/image1.jpg.
*/

// Array of project objects with title and image paths
const projectsData = [
  {
    id: 1,
    title: "Cyber Helper AI toolkit-Fullstack",
    images: ["/projects/project1/image1.jpg", "/projects/project1/image2.jpg"],
  },
  {
    id: 2,
    title: "Flexi Forge Kit-Fullstack - 3D",
    images: ["/projects/project2/image1.jpg", "/projects/project2/image2.jpg"],
  },
  {
    id: 3,
    title: "Web3 Blockchain- Fullstack - tipping Jar",
    images: ["/projects/project3/image1.jpg", "/projects/project3/image2.jpg"],
  },
  {
    id: 4,
    title: "Pop Cart- electronic -e commerce website- woocommerce",
    images: [],
  },
  {
    id: 5,
    title: "Tourism website- contract- wordpress",
    images: [],
  },
  {
    id: 6,
    title: "E-commerce - website",
    images: [],
  },
  {
    id: 7,
    title: "Python Telegram Bot",
    images: [],
  },
  {
    id: 8,
    title: "PQYT Desktop- Cash Track -Full build",
    images: [],
  },
  {
    id: 9,
    title: "PromethiAI - AI Agent Build",
    images: [],
  },
  {
    id: 10,
    title: "Citadel Admin",
    images: [],
  },
  {
    id: 11,
    title: "Worm farm",
    images: [],
  },
];

/*
  The Projects component renders a section with a custom heading
  and a grid of project cards based on the projectsData array.
*/
const Projects = () => {
  return (
    <div className="projects-section">
      <h2>Valentines Opulent Apartment: My Portfolio</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            images={project.images}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
