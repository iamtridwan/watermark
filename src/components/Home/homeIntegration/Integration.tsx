import React from "react";
import SpacedContainer from "../../common/SpacedContainer";
import Adobe from "../../../assets/Adobe Logo.png";
import Figma from "../../../assets/figma1.png";
import Sketch from "../../../assets/sketch.png";
import "./int.css";
const Fade = require("react-reveal/Fade");

// type Props = {}

const Integration = () => {
  return (
    <SpacedContainer>
      <div className="int_title">
        <h2>Easy Integration With Design Softwares</h2>
        <p>One click integration with your favourite design softwares</p>
      </div>
      <div className="int_img">
        <Fade left cascade duration="2000">
          <div className="int_img__1">
            <img src={Adobe} alt="adobe logo" />
            <p>Integrate with Adobe Extention for easy work flow</p>
          </div>
          <div className="int_img__2">
            <img src={Figma} alt="adobe logo" />
            <p>Integrate with Figma Design Tool for easy work flow</p>
          </div>
          <div className="int_img__3">
            <img src={Sketch} alt="adobe logo" />
            <p> with Sketch Design Tool for easy work flow</p>
          </div>
        </Fade>
      </div>
    </SpacedContainer>
  );
};

export default Integration;
