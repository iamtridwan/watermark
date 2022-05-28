import React from "react";
import { useNavigate } from "react-router-dom";
import SpacedContainer from "../../common/SpacedContainer";
import "./beneits.css";
const Pulse = require("react-reveal/Pulse");
type Props = {};

const Benefits = (props: Props) => {
  const navigate = useNavigate();
  return (
    <SpacedContainer>
      <Pulse bottom>
        <div className="benefit_top">
          <div className="benefit_top__left">
            <div className="img img1"></div>
            <div className="img img2"></div>
          </div>
          <div className="benefit_summary">
            <h2>We save you stress</h2>
            <p>
              Voluptate dolore commodo incididunt sit exercitation quis
              cupidatat esse esse commodo eu ullamco. Tempor enim labore velit
              irure irure ex cillum deserunt labore ea fugiat pariatur.{" "}
            </p>
            <button onClick={() => navigate("/upload")}>
              Remove Watermark
            </button>
          </div>
        </div>
        <div className="benefit_bot">
          <div className="benefit_summary">
            <h2>High Quality Image Download</h2>
            <p>
              Voluptate dolore commodo incididunt sit exercitation quis
              cupidatat esse esse commodo eu ullamco. Tempor enim labore velit
              irure irure ex cillum deserunt labore ea fugiat pariatur.{" "}
            </p>
            <button onClick={() => navigate("/upload")}>
              Remove Watermark
            </button>
          </div>
          <div className="benefit_bot__left">
            <div className="img img_bot1"></div>
            <div className="img img_bot2"></div>
            <div className="img img_bot3"></div>
          </div>
        </div>
      </Pulse>
    </SpacedContainer>
  );
};

export default Benefits;
