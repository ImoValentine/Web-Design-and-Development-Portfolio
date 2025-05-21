import React from 'react';
import avatar from '../assets/cyberc.png';
import '../App.css';

const Marquee = () => {
  // Create a long repeated string so the text spans the full width.
  const baseText = "Imraan Jacobs ";
  const repeatedText = baseText.repeat(30); // Adjust repeat count as needed

  return (
    <div className="marquee-container">
      {/* Marquee overlay with sliding text */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <span className="marquee-content">{repeatedText}</span>
          <span className="marquee-content">{repeatedText}</span>
        </div>
      </div>
      
      {/* Overlay container for Linktree, the animated Scroll Down button and avatar */}
      <div className="overlay">
        <div className="linktree">
          <a href="https://linktr.ee/yourusername" target="_blank" rel="noopener noreferrer">
            LINK TREE
          </a>
        </div>
        {/* Animated Scroll Down button positioned at bottom left */}
        <div className="scroll-down-button">
          Scroll Down
        </div>
        <div className="avatar-container">
          <img src={avatar} alt="Avatar" className="avatar-image" />
        </div>
      </div>
    </div>
  );
};

export default Marquee;
