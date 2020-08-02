import React from "react";
import "../css/About.css";
import SkillBar from "react-skillbars";

const About = () => {
  const skills = [
    {
      type: "HTML5",
      level: 80,
    },
    {
      type: "CSS3",
      level: 70,
    },
    {
      type: "BOOTSTRAP4",
      level: 80,
    },
    {
      type: "JAVASCRIPT",
      level: 80,
    },
    {
      type: "REACT JS",
      level: 85,
    },
    {
      type: "NODE JS",
      level: 70,
    },
    {
      type: "EXPRESS JS",
      level: 85,
    },
    {
      type: "MONGODB",
      level: 70,
    },
    {
      type: "FIREBASE",
      level: 60,
    },
  ];

  const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9",
    },
  };

  return (
    <div className="about">
      <div className="about-contents">
        <h2>ABOUT</h2>
        <div className="about-img-para">
          <div className="image-div"></div>
          <div className="about-para">
            Hi! I am Khushwant Kodecha, a web designer/developer focused on
            crafting great web experiences. Designing and Coding have been my
            passion since the days I started working with computers. I enjoy
            creating beautifully designed, intuitive and functional websites.
            For the past 8 months, I've been developing applications for the web
            using mostly React JS.In my spare time, the web development
            community is a big part of my life. My job involves doing what I
            love, Developing new websites/applications, customer relationship
            management (CRM) applications and developing fantastic content
            management systems (CMS).
          </div>
        </div>
        <div className="about__skills">
          <SkillBar skills={skills} colors={colors} animationDelay={50} />
        </div>
      </div>
    </div>
  );
};

export default About;
