import React, { useState } from "react";
import "../pages/crew.css"; // Make sure to create and style this CSS file as per your design
import Button from "../components/button/button.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const crewMembers = [
  { name: "Pirate FTW", role: "Director/Founder", type: "Director" },
  { name: "Wali CHiCK3n", role: "Director/ Co-Founder", type: "Director" },
  { name: "Member A", role: "Artist", type: "Artist" },
  { name: "Member B", role: "Artist", type: "Artist" },
  { name: "Member C", role: "Designer", type: "Designer" },
  { name: "Member D", role: "Designer", type: "Designer" },
  { name: "Member E", role: "Music Producer", type: "Music Producer" },
  { name: "Member F", role: "Music Producer", type: "Music Producer" },
  // Add more dummy members as needed
];

const buttonLabels = [
  { text: "All", link: "All" },
  { text: "Directors", link: "Director" }, // Corrected link value
  { text: "Artists", link: "Artist" }, // Corrected link value
  { text: "Designers", link: "Designer" }, // Corrected link value
  { text: "Music Producers", link: "Music Producer" }, // Corrected link value
];

const Crew = () => {
  const [filter, setFilter] = useState("All");

  const filteredMembers =
    filter === "All"
      ? crewMembers
      : crewMembers.filter((member) => member.type === filter);

  return (
    <section className="crew-container">
      <Container>
        <Row className="mb-4">
          <Col className="text-start">
            <Row>
              <Col>
                <h1 style={{ fontFamily: "PHONK",fontSize:"96px"  }}>Pirate Crew</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                {buttonLabels.map((btn, index) => (
                  <Button
                    key={index}
                    isBlack={true}
                    text={btn.text}
                    onClick={() => setFilter(btn.link)}
                  />
                ))}
              </Col>
            </Row>
          </Col>
          <Col className="col-3 text-start">
            <p className="phal">
              At our Creative Design Company, each member is a vital part of our
              vision. Together, we work and live with passion to craft inspiring
              experiences.
            </p>
          </Col>
        </Row>
        <Row>
          {filteredMembers.map((member, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <div className="member-card p-3 text-center bg-dark text-white">
                <div className="member-photo mb-2"></div>
                <h5>{member.name}</h5>
                <p>{member.role}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Crew;
