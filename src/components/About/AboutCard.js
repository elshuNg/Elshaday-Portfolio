import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            
            <br />
            Hello! I’m a passionate programmer currently attending Unity University, 
            where I am deepening my knowledge and skills in computer science. 
            I thrive on challenges and take pride in my ability to provide effective solutions under pressure.
             To further enhance my skills, I have completed various online courses on platforms like Udemy, 
             exploring topics such as Java, Spring Boot and React. I believe programming is not just about writing
              code; it's about creating meaningful experiences and solving real-world problems.
          </p>
          

          <p style={{ color: "rgb(200 126 172)" }}>
          I am always eager to collaborate with others and contribute to innovative projects, 
          whether I'm working on a complex backend solution or designing engaging frontend interfaces.
            I’m committed to staying updated with industry trends and constantly improving my skills.
           Thank you for visiting my portfolio, and I look forward to connecting and exploring opportunities to
            collaborate!
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
