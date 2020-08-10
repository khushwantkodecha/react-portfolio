import React from "react";
import "../css/Portfolio.css";
import NetFlix from "../images/netflix.png";

const Portfolio = () => {
  const projects = [
    {
      name: "Netflix Clone",
      link: "https://netflix-clone-df5e8.web.app/",
      image: NetFlix,
      alt: "Netflix",
      description: "a music masrer app",
      tech: "React/Node",
    },
    {
      name: "Netflix Clone",
      link: "https://netflix-clone-df5e8.web.app/",
      image: NetFlix,
      alt: "Netflix",
      description: "a music masrer app",
      tech: "React/Node",
    },
    {
      name: "Netflix Clone",
      link: "https://netflix-clone-df5e8.web.app/",
      image: NetFlix,
      alt: "Netflix",
      description: "a music masrer app",
      tech: "React/Node",
    },
    {
      name: "Netflix Clone",
      link: "https://netflix-clone-df5e8.web.app/",
      image: NetFlix,
      alt: "Netflix",
      description: "a music masrer app",
      tech: "React/Node",
    },
    {
      name: "Netflix Clone",
      link: "https://netflix-clone-df5e8.web.app/",
      image: NetFlix,
      alt: "Netflix",
      description: "a music masrer app",
      tech: "React/Node",
    },
    {
      name: "Netflix Clone",
      link: "https://netflix-clone-df5e8.web.app/",
      image: NetFlix,
      alt: "Netflix",
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
