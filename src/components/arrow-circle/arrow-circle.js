// src/Navbar.js
import React from "react";
import { Row, Col } from "react-bootstrap";
import leftArrow from "../../images/left-arrow.png";
import ArrowUp from "../../images/arrow-up.png";
import "../arrow-circle/arrow-circle.css";

const ArrowCircle = ({ arrowUp }) => {
  return (
    <div>
      <div className="nav-left-arrow">
        {arrowUp ? (
          <img
            src={ArrowUp}
            alt="Button Icon"
            className="button-icon m-1"
            width={30}
          />
        ) : (
          <img
            src={leftArrow}
            alt="Button Icon"
            className="button-icon m-1"
            width={30}
          />
        )}
      </div>
    </div>
  );
};

export default ArrowCircle;
