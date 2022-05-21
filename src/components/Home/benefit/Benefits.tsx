import React from "react";
import { useNavigate } from "react-router-dom";
import SpacedContainer from "../../common/SpacedContainer";
import "./beneits.css";
// import Fade from "react-reveal/Fade";
const Bounce = require("react-reveal/Bounce");
type Props = {};

const Benefits = (props: Props) => {
  const navigate = useNavigate();
  return (
    // <Fade>
    <SpacedContainer>
      <div className="benefit_top">
        <Bounce left>
          <div className="benefit_top__left">
            <div className="img img1"></div>
            <div className="img img2"></div>
          </div>
        </Bounce>
        <Bounce right>
          <div className="benefit_summary">
            <h2>We save you stress</h2>
            <p>
              Voluptate dolore commodo incididunt sit exercitation quis
              cupidatat esse esse commodo eu ullamco. Tempor enim labore velit
              irure irure ex cillum deserunt labore ea fugiat pariatur.{" "}
            </p>
            <button onClick={() => navigate("/removewater")}>
              Remove Watermark
            </button>
          </div>
        </Bounce>
      </div>
      <div className="benefit_bot">
        <Bounce left>
          <div className="benefit_summary">
            <h2>High Quality Image Download</h2>
            <p>
              Voluptate dolore commodo incididunt sit exercitation quis
              cupidatat esse esse commodo eu ullamco. Tempor enim labore velit
              irure irure ex cillum deserunt labore ea fugiat pariatur.{" "}
            </p>
            <button onClick={() => navigate("/removewater")}>
              Remove Watermark
            </button>
          </div>
        </Bounce>
        <Bounce right>
          <div className="benefit_bot__left">
            <div className="img img_bot1"></div>
            <div className="img img_bot2"></div>
            <div className="img img_bot3"></div>
          </div>
        </Bounce>
      </div>
    </SpacedContainer>
    // </Fade>
  );
};

export default Benefits;
