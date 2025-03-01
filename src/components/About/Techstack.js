import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiBootstrap,
  
  
} from "react-icons/di";
import {
 
  SiMysql,
  SiExpress,
  
  

} from "react-icons/si";
import {   
  SiSpringboot,    // For Spring Boot  
  SiJava,          // For Java  
  SiPhp,           // For PHP  
  SiLaravel,       // For Laravel  
  SiReact,         // For React  
  SiReactnative    // For React Native  
} from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <SiPhp/>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Col>
     
     
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
     
    </Row>
  );
}

export default Techstack;
