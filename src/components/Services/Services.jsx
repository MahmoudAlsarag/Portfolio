import React from "react";
import "./Services.css";
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

function Services() {
  return (
    <section id="services">
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container container_services">
        <article className="card">
          <MdDesignServices className="icon" />
          <h3>Web Design</h3>
          <p className="text-ligth">
            I design modern, user-friendly interfaces with a focus on
            responsiveness and clean UI/UX principles to deliver a smooth user
            experience across all devices.
          </p>
        </article>
        <article className="card">
          <IoIosRocket className="icon" />
          <h3>Fast Performance</h3>
          <p className="text-ligth">
            I build high-performance web applications optimized for speed and
            efficiency, ensuring fast loading times and a seamless browsing
            experience.
          </p>
        </article>
        <article className="card">
          <FaCode className="icon" />
          <h3>Clean Code</h3>
          <p className="text-ligth">
            I write clean, maintainable, and scalable code following best
            practices, making it easy to understand, update, and expand in the
            future.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Services;
