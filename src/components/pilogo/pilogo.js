import React from "react";
import "./pilogo.css";
import abzImage from "../../images/abz.png";

const Pilogo = () => {
  const text = "PICAROON   PICAROON   PICAROON   PICAROON   "; // Adjust the text as needed
  const textArray = text.split("");
  return (
    <div className="pilogo-outer-circle">
      <div className="pilogo-text-wrapper">
        {textArray.map((char, index) => (
          <span key={index} className="pilogo-circle-text" style={{ transform: `rotate(${index * (360 / textArray.length)}deg)` }}>
            {char}
          </span>
        ))}
      </div>
      <div className="pilogo-inner-circle">
        <img src={abzImage} alt="ABZ" className="pilogo-abz-image" />
      </div>
    </div>
  );
};

export default Pilogo;
