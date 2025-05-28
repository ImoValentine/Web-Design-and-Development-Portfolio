// src/components/Projects.jsx

import React from "react";
import "../App.css";
import ProjectCard from "./ProjectCard.jsx";

// Import images for Project 1
import project1Img1 from "../assets/projects/project1/image1.jpg";
import project1Img2 from "../assets/projects/project1/image2.jpg";

// Import images for Project 2
import project2Img1 from "../assets/projects/project2/image1.jpg";
import project2Img2 from "../assets/projects/project2/image2.jpg";

// Import images for Project 3
import project3Img1 from "../assets/projects/project3/image1.jpg";
import project3Img2 from "../assets/projects/project3/image2.jpg";

// If you add images for more projects, import them similarly.

// Create an array with all the project objects.
// When no images are available for a project, the images array is empty.
const projectsData = [
  {
    id: 1,
    title: "Cyber Helper AI toolkit-Fullstack",
    images: [project1Img1, project1Img2]
  },
  {
    id: 2,
    title: "Flexi Forge Kit-Fullstack - 3D",
    images: [project2Img1, project2Img2]
  },
  {
    id: 3,
    title: "Web3 Blockchain- Fullstack - tipping Jar",
    images: [project3Img1, project3Img2]
  },
  {
    id: 4,
    title: "Pop Cart- electronic -e commerce website- woocommerce",
    images: []
  },
  {
    id: 5,
    title: "Tourism website- contract- wordpress",
    images: []
  },
  {
    id: 6,
    title: "E-commerce - website",
    images: []
  },
  {
    id: 7,
    title: "Python Telegram Bot",
    images: []
  },
  {
    id: 8,
    title: "PQYT Desktop- Cash Track -Full build",
    images: []
  },
  {
    id: 9,
    title: "PromethiAI - AI Agent Build",
    images: []
  },
  {
    id: 10,
    title: "Citadel Admin",
    images: []
  },
  {
    id: 11,
    title: "Worm farm",
    images: []
  }
];

/*
  The Projects component renders a projects section with a custom heading.
  The heading is now updated to:
  
      "Valentines Opulent Apartment: My Portfolio"

  This heading reflects your designer/developer name "Valentine." The component maps over the
  projectsData array, rendering a ProjectCard for each project.
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
