import React from "react";
import "./Projects.css";
import IMG1 from "../../images/portfolio1.png";
import IMG2 from "../../images/portfolio2.png";
import IMG3 from "../../images/portfolio3.png";
import IMG4 from "../../images/portfolio4.png";
import IMG5 from "../../images/portfolio5.png";
import IMG6 from "../../images/portfolio6.png";

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "React E-Commerce Platform",
    github: "https://github.com/MahmoudAlsarag/Ecommerce",
    demo: "https://ecommerce-rho-five-39.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Film Discovery Platform",
    github: "https://github.com/MahmoudAlsarag/movies",
    demo: "https://mahmoudalsarag.github.io/movies/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Food Ordering Website",
    github: "https://github.com/MahmoudAlsarag/restaurant-website",
    demo: "https://mahmoudalsarag.github.io/restaurant-website/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Wiki Search App",
    github: "https://github.com/MahmoudAlsarag/wikipedia",
    demo: "https://mahmoudalsarag.github.io/wikipedia/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Modern UI Layout",
    github: "https://github.com/MahmoudAlsarag/HTML_CSS_Template_One",
    demo: "https://demo5.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Product Management System",
    github: "https://github.com/MahmoudAlsarag/CRUDS",
    demo: "https://mahmoudalsarag.github.io/CRUDS/",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="top_section">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>

      <div className="container projects_container">
        {portfolioData.map(({ id, image, title, github, demo }) => (
          <article className="portfolio_item" key={id}>
            <div className="portfolio_item_img">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item_btns">
              <a href={github} target="_blank" className="btn">
                Github
              </a>
              <a href={demo} target="_blank" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
