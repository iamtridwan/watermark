import React from "react";
import "./contactHead.css";

const Bounce = require("react-reveal/Bounce");
const Fade = require("react-reveal/Fade");

const ContactHeader = () => {
  return (
    <div className="contact-head">
      <Bounce left>
        <div className="head-content">
          <h1>Contact Us</h1>
          <p>
            Reach out to us below, we are always available for your service.
          </p>
        </div>
      </Bounce>
    </div>
  );
};

export default ContactHeader;
