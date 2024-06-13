import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./JoinPirateCrew.css"; // Make sure this CSS file exists and is correctly styled
import Pilogo from "../pilogo/pilogo";
import ArrowCircle from "../arrow-circle/arrow-circle";

const JoinPirateCrew = () => {


  return (
    <section className="join-pirate-crew-section">
      <Container className="text-center">
        <div className="divider">
          <span className="divider-line"></span>
          <img src="/logos/oct.png" alt="Logo" className="divider-logo" />
          <span className="divider-line"></span>
        </div>

        <Row>
          <Col>
            <h2 className="join-title text-white">
              Ready to Join the<br/>Pirate Crew?
            </h2>
            <p className="join-description text-white">
              Ahoy, mateys! Listen up! We're lookin' for brave souls to join our
              pirate crew! If ye be ready for adventure and treasure huntin',
              come aboard our ship. Let's sail the seas together and make our
              mark on history! Join us now, and let's set sail for glory!
            </p>

            <div className="d-flex justify-content-center">
              <Button variant="outline-light" className="mx-2 red-round-button">
                Contact Us
              </Button>
              <Button variant="danger" className="mx-2 red-round-button">
                Set Sail Now
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-start">
          <Col xs={"auto"}>
            <ArrowCircle arrowUp={true} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JoinPirateCrew;
