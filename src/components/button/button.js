import React from "react";
import "../button/button.css"; // Assuming you have a CSS file for styling
import arrow from "../../images/Aroow.png"; // Import the image
import whiteArrow from "../../images/white-arrow.png";

const Button = ({ text, isBlack, onClick, isRed }) => (
  <button
    className={`discover-button
        ${isBlack ? " dark-button me-4" : isRed ? "red-button" : ""}`}
    onClick={onClick}
    style={{ cursor: 'inherit' }} // Ensure the custom cursor is used
  >
    {text}
    {!isBlack && !isRed && (
      <img src={arrow} alt="Button Icon" className="button-icon" />
    )}
    {isRed && (
      <img src={whiteArrow} alt="Button Icon" className="button-icon" />
    )}
  </button>
);

export default Button;
