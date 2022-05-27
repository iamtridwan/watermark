import React from "react";
import "./box.css";
import Chat from "../../../assets/chat.png";
import Mess from "../../../assets/mess.png";
const Fade = require("react-reveal/Fade");
const Bounce = require("react-reveal/Bounce");

const ContactBox = () => {
  return (
    <>
      <div className="contact-box">
        <Fade bottom>
          <div className="contact">
            <img src={Mess} alt="chat icon" />
            <h4>Chat with customer care service</h4>
            <p>
              We reply to our customers in less than 2 min of initiating chat.
            </p>
          </div>
          <div className="contact">
            <img src={Chat} alt="message icon" />
            <h4>Message Us</h4>
            <p>We will reply you back within 2 working days.</p>
          </div>
        </Fade>
      </div>
      <Bounce bottom>
        <button id="contact-btn">Remove Watermark</button>
      </Bounce>
    </>
  );
};

export default ContactBox;
