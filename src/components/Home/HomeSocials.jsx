// import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import "./Home.css"

function HomeSocials() {
  return (
    <div className="home_socials">
        <a href={`http://linkedin.com/in/mahmoud-saeed12`} target='_blank '><FaLinkedin /></a>
        <a href={`https://github.com/MahmoudAlsarag`} target='_blank '><FaGithub /></a>
        <a href={`https://www.facebook.com/share/14ddLFK2Tqj/`} target='_blank '><FaDribbble /></a>
    </div>
  )
}

export default HomeSocials