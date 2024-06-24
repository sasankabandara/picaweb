import React, { useState } from "react";
import "../pages/crew.css"; // Make sure to create and style this CSS file as per your design
import Button from "../components/button/button.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import your images here
import pirateImage from "../images/logo1.png"; // Example path
import waliImage from "../images/logo1.png"; // Example path
import memberImage from "../images/logo1.png"; // Example path

const crewMembers = [
  { name: "Pirate FTW", role: "Director/Founder", type: "Director", image: pirateImage },
  { name: "Wali CHiCK3n", role: "Director/ Co-Founder", type: "Director", image: waliImage },
  { name: "Member A", role: "Artist", type: "Artist", image: memberImage },
  { name: "Member B", role: "Artist", type: "Artist", image: memberImage },
  { name: "Member C", role: "Designer", type: "Designer", image: memberImage },
  { name: "Member D", role: "Designer", type: "Designer", image: memberImage },
  { name: "Member E", role: "Music Producer", type: "Music Producer", image: memberImage },
  { name: "Member F", role: "Music Producer", type: "Music Producer", image: memberImage },

  { name: "Member I", role: "Music Producer", type: "Music Producer", image: memberImage },
  { name: "Member J", role: "Artist", type: "Artist", image: memberImage },
  { name: "Member K", role: "Designer", type: "Designer", image: memberImage },
  { name: "Member L", role: "Music Producer", type: "Music Producer", image: memberImage },
  { name: "Member M", role: "Artist", type: "Artist", image: memberImage },
  { name: "Member N", role: "Designer", type: "Designer", image: memberImage },
  { name: "Member O", role: "Music Producer", type: "Music Producer", image: memberImage },
  { name: "Member P", role: "Artist", type: "Artist", image: memberImage },
  { name: "Member Q", role: "Designer", type: "Designer", image: memberImage },
  { name: "Member R", role: "Music Producer", type: "Music Producer", image: memberImage },
  { name: "Member S", role: "Artist", type: "Artist", image: memberImage },
  { name: "Member T", role: "Designer", type: "Designer", image: memberImage },
  { name: "Member U", role: "Music Producer", type: "Music Producer", image: memberImage },
  { name: "Member V", role: "Artist", type: "Artist", image: memberImage },
  { name: "Member W", role: "Designer", type: "Designer", image: memberImage },
  { name: "Member X", role: "Music Producer", type: "Music Producer", image: memberImage },
  { name: "Member Y", role: "Artist", type: "Artist", image: memberImage },
  { name: "Member Z", role: "Designer", type: "Designer", image: memberImage },
  { name: "Member AA", role: "Music Producer", type: "Music Producer", image: memberImage },
  { name: "Member BB", role: "Artist", type: "Artist", image: memberImage },
  { name: "Member CC", role: "Designer", type: "Designer", image: memberImage },
  { name: "Member DD", role: "Music Producer", type: "Music Producer", image: memberImage },
  { name: "Member EE", role: "Artist", type: "Artist", image: memberImage },
  { name: "Member FF", role: "Designer", type: "Designer", image: memberImage },
  { name: "Member GG", role: "Music Producer", type: "Music Producer", image: memberImage },
  { name: "Member HH", role: "Artist", type: "Artist", image: memberImage },
  { name: "Member II", role: "Designer", type: "Designer", image: memberImage },
  { name: "Member JJ", role: "Music Producer", type: "Music Producer", image: memberImage },
  { name: "Member KK", role: "Artist", type: "Artist", image: memberImage },
  { name: "Member LL", role: "Designer", type: "Designer", image: memberImage },
  { name: "Member MM", role: "Music Producer", type: "Music Producer", image: memberImage },
  { name: "Member NN", role: "Artist", type: "Artist", image: memberImage },
  { name: "Member OO", role: "Designer", type: "Designer", image: memberImage },
  { name: "Member PP", role: "Music Producer", type: "Music Producer", image: memberImage },
  { name: "Member QQ", role: "Artist", type: "Artist", image: memberImage },
  { name: "Member RR", role: "Designer", type: "Designer", image: memberImage },
  { name: "Member SS", role: "Music Producer", type: "Music Producer", image: memberImage },
  { name: "Member TT", role: "Artist", type: "Artist", image: memberImage },
  { name: "Member UU", role: "Designer", type: "Designer", image: memberImage },
  { name: "Member VV", role: "Music Producer", type: "Music Producer", image: memberImage },
  { name: "Member WW", role: "Artist", type: "Artist", image: memberImage },
  { name: "Member XX", role: "Designer", type: "Designer", image: memberImage },
 

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
                <h1 style={{ fontFamily: "PHONK", fontSize: "96px" }}>Pirate Crew</h1>
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
            <Col key={index} xs={12} sm={6} md={4} lg={2} className="mb-4">
              <div className="member-card text-center">
                <div
                  className="member-photo mb-2"
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>
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
