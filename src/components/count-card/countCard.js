import React from "react";
import { Row, Col } from "react-bootstrap";
import "../count-card/countCard.css";

const CountCard = ({ value, text1, text2, isLast }) => {
  return (
    <Row className="align-items-center info-card">
      <Col xs="auto" className="info-card-count">
        {value}
      </Col>

      <Col className="info-card-text text-start"><Row><Col>{text1}</Col></Row><Row><Col>{text2}</Col></Row></Col>
      
      {!isLast && <Col xs="auto" className="vertical-divider"></Col>}
    </Row>
  );
};

export default CountCard;
