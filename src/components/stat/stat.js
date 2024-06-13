import React from "react";
import "../stat/stat.css"; // Ensure this path is correct
import CountCard from "../count-card/countCard";
import { Col, Row } from "react-bootstrap";

const statsData = [
  { number: 10, label: "Years of", label2: "experience" },
  { number: 650, label: "Projects", label2: "Completed" },
  { number: 1000, label: "Happy", label2: "Customers" },
  { number: 50, label: "Team", label2: "Members" },
];

const Stats = () => {
  return (
    <div className="container text-center my-5">
      <header>
        <h1 className="agency-header" style={{ lineHeight: 0.7 }}>
          CREATIVE <br />
          <span className="design-agency">DESIGN AGENCY</span>
        </h1>
        <p className="paragraph-content" >
          Hey there! Welcome aboard Picaroon, a digital design agency that sets
          sail on elaborate journeys to explore the fascinating realms of
          creativity and design. Navigating through rough seas and bright
          horizons, we transform ideas into captivating visual experiences.
        </p>
      </header>

      <section className="stats text-justify my-5">
        <Row>
          {statsData.map((stat, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-3">
              <CountCard
                key={index}
                value={stat.number}
                text1={stat.label}
                text2={stat.label2}
                isLast={index === statsData.length - 1}
              />
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Stats;
