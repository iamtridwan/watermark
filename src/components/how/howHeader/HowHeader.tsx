import { useNavigate } from "react-router-dom";
import "./howHeader.css";

const Pulse = require("react-reveal/Pulse");

const HowHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="how-header">
      <Pulse left>
        <div className="how-header-content">
          <h1>How it works</h1>
          <p>
            WM Removal helps you to effortlessly remove watermarks from
            downloaded images and make life easier for you as a creative with
            just a button click
          </p>
          <button onClick={() => navigate("/upload")}>Remove Watermark</button>
        </div>
      </Pulse>
    </div>
  );
};

export default HowHeader;
