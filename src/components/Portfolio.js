import React from "react";
import "../css/Portfolio.css";
import Profile from "../images/profile.jpg";

const Portfolio = () => {
  const projects = [
    {
      name: "Music Master",
      link: "www.google.com",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
      alt: "music master",
      description: "a music masrer app",
    },

    {
      name: "Music Master",
      link: "www.google.com",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
      alt: "music master",
      description: "a music masrer app",
    },
    {
      name: "Music Master",
      link: "www.google.com",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
      alt: "music master",
      description: "a music masrer app",
    },
    {
      name: "Music Master",
      link: "www.google.com",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
      alt: "music master",
      description: "a music masrer app",
    },
    {
      name: "Music Master",
      link: "www.google.com",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
      alt: "music master",
      description: "a music masrer app",
    },
    {
      name: "Music Master",
      link: "www.google.com",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
      alt: "music master",
      description: "a music masrer app",
    },
  ];
  return (
    <div className="portfolio">
      <h3>PROJECTS</h3>
      <div className="portfolio__contents">
        <div className="projects">
          {projects.map((project, index) => {
            return (
              <div className={`project project_${index}`}>
                <img className="project__image" src={project.image} />
                <div className="project__footer">
                  <h5>React/Node</h5>
                  <button className="demo__button">View Demo</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
