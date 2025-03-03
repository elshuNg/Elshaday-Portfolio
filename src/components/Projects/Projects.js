import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Code from "../../Assets/Projects/code.png";
import CodeVideo from "../../Assets/Projects/codeTibeb.mp4";

import Ratatoulli from "../../Assets/Projects/Ratatoulli.png";
import videoLink from "../../Assets/Projects/ratatoulliVid.mp4"

import CircleIcon from "@mui/icons-material/Circle";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ratatoulli}
              isVideo={true}
              title="Ratatoulli"
              videoLink={videoLink}
              description="A recipe sharing application"
              Overview="The Recipe Sharing App is aimed to have a vibrant food community by allowing users to 
              share their favorite recipes, engage through likes and comments, and follow chefs and friends.
               With a robust search feature, users can easily discover new dishes tailored to their interests, creating an 
               interactive platform that enhances culinary creativity and connection.

"
              Tech_Stack={
                <div>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Frontend: React Native
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Backend: PHP
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Database: MySQL
                  </p>
                </div>
              }
              Features={
                <div>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Recipe Sharing: Users can easily share their favorite recipes with the community, 
                    allowing for a diverse collection of food preparation procedures that others can explore and enjoy.
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} /> 
                    Engagement Features: Users can like and comment on recipes, fostering interaction and discussion around cooking techniques, 
                    ingredient substitutions, and personal experiences with each recipe.
                  </p>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Personalized Experience: The app allows users to follow their favorite chefs and friends, as well as search for specific foods or types of cuisine they are interested in, 
                    making it easier to discover new recipes that fit their tastes.
                  </p>
                </div>
              }
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Code}
              isVideo={true}
              title="Code Tibeb "
              description="Tech Team Portal (My first website)"
              videoLink={CodeVideo}
              Overview="This  website serves as a dynamic tech portal, it marks my first foray into web development,
               reflecting my foundational skills in creating an engaging online presence. While I recognize that there is room for improvement, this project has been a significant stepping stone in my journey as a developer. Through this experience, I have gained valuable
               insights and honed my skills, leading to substantial improvements in my web development capabilities."
              Tech_Stack={
                <div>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                     HTML, CSS and JavaScript
                  </p>
                 
                </div>
              }
              Features={
                <div>
                  <p>
                    <CircleIcon style={{ fontSize: 14 }} />
                    Project Showcase: The website prominently displays various projects, 
                    highlighting the innovative solutions and capabilities developed by the software company.
                  </p>
                 
                </div>
              }
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
