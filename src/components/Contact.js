import React from "react";
import "./Contact.css"; // Ensure this file is updated

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <i className="bx bx-envelope"></i>
        </a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
