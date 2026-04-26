import React , { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from '@emailjs/browser';




const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "Mahmoudelsarag@gmail.com",
    link: "mailto:Mahmoudelsarag974@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "MahmoudAlsarag",
    link: "https://m.me/mahmoud.saeed.197603",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "01148528535",
    link: "https://api.whatsapp.com/send?phone=201148528535",
  },
];

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a0rotin', 'template_vogjt5d', form.current,  'mlmu3tkBGUrN7UTco',
      )
      e.target.reset()
  };
  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact_option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank">
                Send Massage
              </a>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Full Name" name="name" />
          <input type="email" placeholder="Your Email" name="email" />
          <textarea
            rows={10}
            placeholder="Enter Your Message"
            name="message"
            id=""
          ></textarea>
          <button className="btn btn_primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
