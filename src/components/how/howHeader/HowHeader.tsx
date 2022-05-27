import "./howHeader.css";

const Bounce = require("react-reveal/Bounce");

const HowHeader = () => (
  <div className="how-header">
    <Bounce left>
      <div className="header-content">
        <h1>How it works</h1>
        <p>
          WM Removal helps you to effortlessly remove watermarks from downloaded
          images and make life easier for you as a creative with just a button
          click
        </p>
        <button>Remove Watermark</button>
      </div>
    </Bounce>
  </div>
);

export default HowHeader;
