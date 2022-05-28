import React from "react";
import "./contactHead.css";

const Pulse = require("react-reveal/Pulse");


const ContactHeader = () => {
  return (
    <div className="contact-head">
      <Pulse left>
        <div className="head-content">
          <h1>Contact Us</h1>
          <p>
            Reach out to us below, we are always available for your service.
          </p>
        </div>
      </Pulse>
    </div>
  );
};

export default ContactHeader;
