import React from 'react'
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin  } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>Mahmoud Alsarag</a>
      <ul className='permalinks'>
          <li><a href="">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        
      </ul>
      <div className="footer_socials">
        <a href={`https://www.facebook.com/share/14ddLFK2Tqj/`} target='_blank'><FaFacebookF/></a>
        <a href={`https://www.instagram.com/melsarag12?igsh=MWhuMnMzNTNiYWMxbg==`} target='_blank'><FaInstagram/></a>
        <a href={`http://linkedin.com/in/mahmoud-saeed12`} target='_blank'><FaLinkedin /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; <a href="">Mahmoud Alsarag</a> All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer