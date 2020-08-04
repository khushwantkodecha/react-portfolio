import React from "react";
import "../css/Portfolio.css";
import Profile from "../images/profile.jpg";

const Portfolio = () => {
  const projects = [
    {
      name: "Music Master",
      link: "https://www.google.com",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
      alt: "music master",
      description: "a music masrer app",
      tech: "React/Node",
    },

    {
      name: "Music Master",
      link: "https://www.google.com",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
      alt: "music master",
      description: "a music masrer app",
      tech: "React/Node",
    },
    {
      name: "Music Master",
      link: "https://www.google.com",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
      alt: "music master",
      description: "a music masrer app",
      tech: "React/Node",
    },
    {
      name: "Music Master",
      link: "https://www.google.com",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
      alt: "music master",
      description: "a music masrer app",
      tech: "React/Node",
    },
    {
      name: "Music Master",
      link: "https://www.google.com",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
      alt: "music master",
      description: "a music masrer app",
      tech: "React/Node",
    },
    {
      name: "Music Master",
      link: "https://www.google.com",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
      alt: "music master",
      description: "a music masrer app",
      tech: "React/Node",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h3>PROJECTS</h3>
      <div className="portfolio__contents">
        <div className="projects">
          {projects.map((project, index) => {
            return (
              <a
                href={project.link}
                target="_blank"
                style={{ textDecoration: "none", color: "#111" }}
              >
                <div
                  className={`project project_${index}`}
                  title="Click to view demo"
                >
                  <img className="project__image" src={project.image} />
                  <div className="project__footer">
                    <h5 className="mt-3">{project.name}</h5>
                    <p>{project.tech}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
