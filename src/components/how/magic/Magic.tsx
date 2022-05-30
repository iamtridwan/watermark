import React from "react";
import "./magic.css";
import CheckGif from "../../../assets/gifs/CheckGif.gif";
import DownloadedGif from "../../../assets/gifs/DownloadedGif.gif";

import { useNavigate } from "react-router-dom";
import liftGif from "../../../assets/gifs/liftGif.gif";
import SmileyGif from "../../../assets/gifs/smilyGif.gif";
import SpacedContainer from "../../common/SpacedContainer";
const Fade = require("react-reveal/Fade");


const Magic = () => {
  const navigate = useNavigate();
  return (
    <SpacedContainer>
      <div className="how-magic">
          <h1>How The Magic Happens</h1>
        <div className="magic-container">
          <Fade bottom>
            <div className="how-container check">
              <img src={DownloadedGif} alt="check" />
              <p>
                Upload your Watermarked Images by clicking Remove Watermark
                Button
              </p>
            </div>
            <div className="how-container lift">
              <img src={liftGif} alt="lift" />
              <p>
                Allow our APIs to do the heavy lifting while you continue
                brainstorming on your design process
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="how-container download">
              <img src={CheckGif} alt="download" />
              <p>
                Download your high quality Image after our APIs succesfully
                remove all the watermarks
              </p>
            </div>
            <div className="how-container smiley">
              <img src={SmileyGif} alt="smiley" />
              <p>
                Enjoy the rest of your day and don’t forget to tell even your
                village people about us
              </p>
            </div>
          </Fade>
        </div>
          <button onClick={() => navigate("/upload")}>Remove Watermark</button>
 
      </div>
    </SpacedContainer>
  );
};

export default Magic;
