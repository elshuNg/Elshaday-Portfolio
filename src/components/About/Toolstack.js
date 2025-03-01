import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiExpo, // Import the Expo logo
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode size={50} /> {/* Adjust size if needed */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman size={50} /> {/* Adjust size if needed */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpo size={50} /> {/* Add Expo logo */}
      </Col>
    </Row>
  );
}

export default Toolstack;