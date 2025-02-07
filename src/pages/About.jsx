import React from "react";
import "../assets/styles/About.css";

import VictorImage from "../assets/images/victor.jpeg";
import KamranImage from "../assets/images/kamran.png";

const devMembers = [
  {
    name: "Victor Abussafi",
    image: VictorImage,
    github: "https://github.com/abussafilx",
    linkedin: "https://www.linkedin.com/in/victorabussafi/",
  },
  {
    name: "Kamran Ali",
    image: KamranImage,
    github: "https://github.com/Kamran-frontend",
    linkedin: "https://www.linkedin.com/in/kamranalifrmrbw/",
  },
];

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Kanban Board Mini Project</h1>
      <p className="about-description">
        his React.js project was developed by <b>{devMembers[0].name}</b> and{" "}
        <b>{devMembers[1].name}</b>
        &nbsp;as part of their learning journey at Ironhack.
      </p>

      <h2 className="dev-title">Meet the Devs</h2>
      <div className="dev-grid">
        {devMembers.map((member, index) => (
          <div key={index} className="dev-card">
            <img src={member.image} alt={member.name} className="dev-image" />
            <h3 className="dev-name">{member.name}</h3>
            <p>
              <a href={member.github} target="_blank" className="dev-link">
                GitHub
              </a>{" "}
              |
              <a href={member.linkedin} target="_blank" className="dev-link">
                {" "}
                LinkedIn
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
