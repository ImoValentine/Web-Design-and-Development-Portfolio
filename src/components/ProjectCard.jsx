// src/components/ProjectCard.jsx

import React, { useState } from "react";

/*
  ProjectCard is a functional component that renders a card for a project.
  It receives two props:
    - title: a string containing the project's title.
    - images: an array of image URLs (or imported image paths) for the project's carousel.
  
  If the images array is non-empty, it displays the carousel with left/right navigation.
  If the images array is empty, it simply shows the project title and a note to contact for more information.
*/
const ProjectCard = ({ title, images }) => {
  // Use state to keep track of the currently displayed image's index.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler for when the "previous" arrow is clicked.
  const handlePrev = (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up.
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1 // Cycle to the last if at the beginning.
    );
  };

  // Handler for when the "next" arrow is clicked.
  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1 // Cycle to the first if at the end.
    );
  };

  return (
    <div className="project-card">
      {
        // Only render the carousel if there is at least one image in the array.
        images && images.length > 0 ? (
          <div className="carousel">
            {/* Left navigation button */}
            <button className="carousel-button left" onClick={handlePrev}>
              &#8592;
            </button>
            {/* Display the current image from the images array */}
            <img
              src={images[currentIndex]}
              alt={`${title} ${currentIndex + 1}`}
              className="project-image"
            />
            {/* Right navigation button */}
            <button className="carousel-button right" onClick={handleNext}>
              &#8594;
            </button>
          </div>
        ) : null
      }
      <div className="card-content">
        {/* Project title */}
        <h3 className="project-title">{title}</h3>
        {/* Contact message */}
        <p className="project-info">Contact for more information</p>
      </div>
    </div>
  );
};

export default ProjectCard;
