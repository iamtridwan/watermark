import React from "react";
import adobe from "../../../assets/Adobe Logo.png";
import google from "../../../assets/Google Logo.png";
import figma from "../../../assets/Figma Icon.png";
import "./horizontalScroll.css";

type Props = {};

const HorizontalScroll = (props: Props) => {
  return (
    <div className="scroll">
      <p>Trusted by different designers and agencies across the continent.</p>
      <div className="scroll-container">
        <div className="scroll-box">
          <img src={adobe} alt="adobe logo" />
          <img src={google} alt="adobe logo" />
          <img src={figma} alt="adobe logo" />
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
