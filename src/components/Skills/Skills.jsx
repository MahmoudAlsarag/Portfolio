import React from "react";
import "./Skills.css";
import CSS from "../../images/css3.svg";
import Xpressjs from "../../images/expressjs.svg";
import Figma from "../../images/figma.svg";
import Javascript from "../../images/javascript.svg";
import Mongodb from "../../images/mongodb.svg";
import Nodejs from "../../images/nodejs.svg";
import ReactJS from "../../images/react.svg";
import Tailwind from "../../images/tailwindcss.svg";

const SkillsData = [
  {
    id: 1,
    image: CSS,
    title: "CSS",
    disc: "User Interface",
  },
  {
    id: 2,
    image: Javascript,
    title: "JavaScript",
    disc: "Interaction",
  },
  {
    id: 3,
    image: ReactJS,
    title: "React",
    disc: "Framework",
  },
  {
    id: 4,
    image: Tailwind,
    title: "TailwindCSS",
    disc: "User Interface",
  },
  {
    id: 5,
    image: Nodejs,
    title: "NodeJS",
    disc: "Web Server",
  },
  {
    id: 6,
    image: Figma,
    title: "Figma",
    disc: "Design tool",
  },
  {
    id: 7,
    image: Xpressjs,
    title: "ExpressJS",
    disc: "Node Framework",
  },
  {
    id: 8,
    image: Mongodb,
    title: "MongoDB",
    disc: "Database",
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2>My Experiencec</h2>
      </div>

      <div className="container container_skills">
        {SkillsData.map(({ id, image, title, disc }) => (
          <article className="card_skill" key={id}>
            <div className="icon">
              <img src={image} alt="" />
            </div>

            <div className="content">
              <h4>{title}</h4>
              <p className="text_light">{disc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
