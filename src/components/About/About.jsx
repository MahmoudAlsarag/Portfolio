import React from "react";
import "./About.css";
import IMageME from "../../images/mephoto3.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={IMageME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </div>

            <div className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </div>

            <div className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </div>
          </div>
          <p>
            I am a Front-End Developer with a passion for creating clean,
            scalable, and high-performance web applications. I specialize in
            building responsive user interfaces using modern technologies like
            React and JavaScript. I enjoy solving problems, optimizing
            performance, and continuously learning to stay up to date with the
            latest industry trends.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
