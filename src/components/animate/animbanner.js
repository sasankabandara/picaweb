import React from 'react';
import '../animate/animbanner.css';
import pqrImage from '../../images/pqr.png'; // Make sure the image path is correct

const ScrollingLabel = () => {
  return (
    <div className="scrolling-container">
      <div className="scrolling-text">
        <span><img src={pqrImage} alt="icon" />VIDEO PRODUCTION  </span>
        <span><img src={pqrImage} alt="icon" /> BRAND DESIGN </span>
        <span><img src={pqrImage} alt="icon" /> DIGITAL DESIGN </span>
        <span><img src={pqrImage} alt="icon" />ANIMATION </span>
        <span><img src={pqrImage} alt="icon" />MUSIC PRODUCTION <img src={pqrImage} alt="icon" /></span>
      </div>
    </div>
  );
};

export default ScrollingLabel;
