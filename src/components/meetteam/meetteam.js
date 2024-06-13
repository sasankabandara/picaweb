import React from "react";
import "../meetteam/meetteam.css"; // Import your CSS file for styling
import { Container, Row, Col } from "react-bootstrap";
import group from "../../images/group-image.png";
import Button from "../button/button";
import { Link } from "react-router-dom";
import CountCard from "../count-card/countCard";

const Meetteam = () => {
  return (
    <div className="container text-center my-5">
      <section className="team my-5">
        <Row>
          <Col xs={8} className="text-start team-head">
            MEET THE TEAM
          </Col>
        </Row>
        <Row>
          <Col className="col-8">
            <img src={group} width={"100%"} />
          </Col>
          <Col className="text-start px-2">
            <Row>
              <Col>
                <CountCard value={"50"} text1={"Team"} text2={"Members"} />
              </Col>
            </Row>
            <Row>
              <Col className="teamdes">
                At our Creative Design Company, every member is a brushstroke in
                our masterpiece. Together, we blend imagination and expertise,
                weaving innovation into every project. With diverse talents and
                a shared passion for creativity, we sculpt ideas into reality,
                crafting experiences that inspire and captivate
              </Col>
            </Row>
            <Row>
              <Col className="btn-group">
                <Link to="/crew">
                  <Button text={"Discover more"} onClick={() => {}} />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Meetteam;
