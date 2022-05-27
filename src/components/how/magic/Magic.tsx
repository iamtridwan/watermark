import React from "react";
import "./magic.css";
import Check from "../../../assets/check.png";
import Download from "../../../assets/download.png";
import Lift from "../../../assets/lift.png";
import Smiley from "../../../assets/smiley.png";
import SpacedContainer from "../../common/SpacedContainer";
const Bounce = require("react-reveal/Bounce");

const Magic = () => {
  return (
    <SpacedContainer>
      <div className="how-magic">
        <Bounce left>
          <h1>How The Magic Happens</h1>
        </Bounce>
        <Bounce bottom>
          <div className="magic-container">
            <div className="how-container check">
              <img src={Check} alt="check" />
              <p>
                Upload your Watermarked Images by clicking Remove Watermark
                Button
              </p>
            </div>
            <div className="how-container lift">
              <img src={Lift} alt="lift" />
              <p>
                Allow our APIs to do the heavy lifting while you continue
                brainstorming on your design process
              </p>
            </div>
            <div className="how-container download">
              <img src={Download} alt="download" />
              <p>
                Download your high quality Image after our APIs succesfully
                remove all the watermarks
              </p>
            </div>
            <div className="how-container smiley">
              <img src={Smiley} alt="smiley" />
              <p>
                Enjoy the rest of your day and don’t forget to tell even your
                village people about us
              </p>
            </div>
          </div>
          <button>Remove Watermark</button>
        </Bounce>
      </div>
    </SpacedContainer>
  );
};

export default Magic;
