import React from "react";
import { useNavigate } from "react-router-dom";
import "./box.css";
import ChatGif from "../../../assets/Contactgif/ChatGif.gif";
import MessGif from "../../../assets/Contactgif/MessageGif.gif";
const Fade = require("react-reveal/Fade");
const Bounce = require("react-reveal/Bounce");

const ContactBox = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="contact-box">
        <Fade bottom>
          <div className="contact">
            <img src={MessGif} alt="chat icon" />
            <h4>Chat with customer care service</h4>
            <p>
              We reply to our customers in less than 2 min of initiating chat.
            </p>
          </div>
          <div className="contact">
            <img src={ChatGif} alt="message icon" />
            <h4>Message Us</h4>
            <p>We will reply you back within 2 working days.</p>
          </div>
        </Fade>
      </div>
        <button id="contact-btn" onClick={() => navigate("/upload")}>Remove Watermark</button>
    </>
  );
};

export default ContactBox;
