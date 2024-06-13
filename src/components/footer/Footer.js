// src/components/Footer.js

import React from 'react';
import '../footer/Footer.css'; // Import custom styles
import piclogo from "../../images/piclogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer text-white pt-3 pb-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="footer-left">
          <img src="/logos/fotlog.png" alt="Picaroon Logo" className="footer-logo" />
        </div>
        <div className="footer-center">
          <nav className="nav">
            <a className="nav-link text-white" href="#">Home</a>
            <a className="nav-link text-white" href="#">Contact Us</a>
            <a className="nav-link text-white" href="#">Our Projects</a>
          </nav>
        </div>
        <div className="footer-right">
        <a className="text-white" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a className="text-white ml-3" href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          <a className="text-white ml-3" href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
      <hr></hr>
      <div className="container text-center mt-3">
        <small>© 2023 by Picaroon pvt. ltd</small>
      </div>
    </footer>
  );
};

export default Footer;
