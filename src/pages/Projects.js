import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../pages/Projects.css"; // Ensure this CSS file exists and is correctly styled
import Button from "../components/button/button.js";

const projectData = [
  {
    category: "Branding",
    projects: [
      { id: 1, image: "" },
      { id: 2, image: "" },
      { id: 3, image: "" },
    ],
  },
  {
    category: "Video Production",
    projects: [
      { id: 1, image: "" },
      { id: 2, image: "" },
      { id: 3, image: "" },
    ],
  },
  {
    category: "Digital Design",
    projects: [
      { id: 1, image: "" },
      { id: 2, image: "" },
      { id: 3, image: "" },
    ],
  },
  {
    category: "Animation",
    projects: [
      { id: 1, image: "" },
      { id: 2, image: "" },
      { id: 3, image: "" },
    ],
  },
  {
    category: "Music Production",
    projects: [
      { id: 1, image: "" },
      { id: 2, image: "" },
      { id: 3, image: "" },
    ],
  },
];

const Projects = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "Animation";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredProjects = projectData.find(
    (project) => project.category === selectedCategory
  ).projects;

  return (
    <section className="projects">
      <Container>
        <Row className="align-items-center justify-content-start">
          <Col md={8} className="text-start">
            <Row className="justify-content-start">
              <Col className="projects-title text-white">
                <h1 style={{ fontFamily: "PHONK",fontSize:"90px" }}>Our Projects</h1>
              </Col>
            </Row>
            <Row className="my-4">
              <Col>
                {[
                  "Branding",
                  "Video Production",
                  "Digital Design",
                  "Animation",
                  "Music Production",
                ].map((category) => (
                  <Button
                    key={category}
                    text={category}
                    isBlack={true}
                    className={`mx-2 project-button ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </Col>
            </Row>
          </Col>
          <Col md={4} className="text-start">
            <p className="projects-description text-white">
              {selectedCategory} breathes life into images through rapid visual
              changes. It includes hand-drawn, CGI, and stop-motion techniques,
              captivating audiences across media with its dynamic storytelling
              and emotional resonance.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <div className="project-large">
              <img
                src={filteredProjects[0].image || "/logos/oct.png"}
                alt="Project"
                className="project-image"
              />
            </div>
          </Col>
          <Col md={4}>
            <div className="project-small">
              <img
                src={filteredProjects[1].image || "/logos/oct.png"}
                alt="Project"
                className="project-image"
              />
            </div>
            <div className="project-small">
              <img
                src={filteredProjects[2].image || "/logos/oct.png"}
                alt="Project"
                className="project-image"
              />
            </div>
            <div className="project-small">
              <img
                src={filteredProjects[2].image || "/logos/oct.png"}
                alt="Project"
                className="project-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
