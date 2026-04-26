// import React from "react"
import "./Home.css";
import Me from "../../images/meimage3.jpeg";
import CV from "../../images/cv.pdf";
import HomeSocials from "./HomeSocials";

function Home() {
  return (
    <div className="home" id="home">
      <div className="container home_container">
        <h4>Hello I'M</h4>
        <h1>Mahmoud Alsarag</h1>
        <h4 className="text-light">Frontend Developer </h4>

        <div className="btns">
          <a href={CV} className="btn" download>Download CV</a>
          <a href="" className="btn btn-primary">Let's Talk</a>
        </div>

        <div className="me">
          <img src={Me} alt="" />
          </div>
          <a href="#about" className="scroll_down">Scroll Down</a>
          <HomeSocials/>
      </div>
    </div>
  );
}

export default Home ;
