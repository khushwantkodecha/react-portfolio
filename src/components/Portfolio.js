import React from "react";
import "../css/Portfolio.css";
import NetFlix from "../images/netflix.png";
import TODO from "../images/TODO.png";
import Messenger from "../images/Messenger.png";
import TicTac from "../images/TicTac.png";
import NewsReader from "../images/NewsReader.png";

const Portfolio = () => {
  const projects = [
    {
      name: "AI Based Voice Controlled News Reader",
      link: "https://ai-news-reader.web.app/",
      image: NewsReader,
      alt: "NewsReader",
      tech: "React/News API/ Firebase",
    },
    {
      name: "Netflix Clone",
      link: "https://netflix-clone-df5e8.web.app/",
      image: NetFlix,
      alt: "Netflix",
      tech: "React/TMDB api",
    },
    {
      name: "Facebook Messenger Clone",
      link: "https://messenger-clone-63b48.web.app/",
      image: Messenger,
      alt: "Messengeer",
      tech: "React/Firebase",
    },
    {
      name: "Todo App",
      link: "https://react-todo-e73c0.web.app/",
      image: TODO,
      alt: "react todo app",
      tech: "React/Firebase",
    },
    {
      name: "Tic Tac Toe",
      link: "https://tic-tac-toe-3fdee.web.app/",
      image: TicTac,
      alt: "Tic Tac Toe",
      tech: "React/Firebase",
    },
    {
      name: "Netflix Clone",
      link: "https://netflix-clone-df5e8.web.app/",
      image: NetFlix,
      alt: "Netflix",
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
