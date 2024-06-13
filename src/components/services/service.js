import React from "react";
import "../services/service.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";
import arrow from "../../images/arrow.png";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../button/button";

const services = [
  "Branding",
  "Video Production",
  "Digital Design",
  "Animation",
  "Music Production",
];

const Service = () => {
  return (
    <div className="container text-start my-5">
      <section className="services my-5">
        <Row className="align-items-center">
          <Col xs={12} md={5} className="service-header">
            SERVICES
          </Col>
          <Col className="btn-group">
            <Link to="/projects">
              <Button text={"Discover more"} onClick={() => {}} />
            </Link>
          </Col>
        </Row>
        <div className="service-list">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/projects?category=${ service}`}
              className={`service-item ${
                service === "Animation" ? "service-active" : ""
              }`}
            >
              {service}{" "}
              <img src={arrow} alt="icon" width={40} className="service-icon" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Service;
