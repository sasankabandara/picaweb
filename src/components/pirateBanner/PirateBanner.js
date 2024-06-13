import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../pirateBanner/PirateBanner.css"; // Make sure this CSS file exists and is correctly styled
import Pilogo from "../../assets/image/pilogo.png";

const PirateBanner = () => {
  return (
    <div className="pirate-banner ">
      <Row className="container ms-4">
        <Col xs={12} className=" my-5 text-start ms-4 relative">
          <div className="ps-3 banner-text text-uppercase">
            <img src={Pilogo} width={"70px"} className="me-3" />
            Creativity is the spark that ignites imagination lighting the path
            to new possibilities and innovation
            <p className="sub-text text-end">-Pirate FTW</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PirateBanner;
