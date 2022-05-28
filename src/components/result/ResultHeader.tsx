import React from "react";
import "./resHeader.css";
import Original from "../../assets/oriWatermark.png";
import Removed from "../../assets/remWatermark.png";

const ResultHeader = () => {
  return (
    <div className="res-header">
      <div className="res res-left">
        <div className="res-content">
          <p>Original Image</p>
          <img src={Original} alt="watermarked image" />
          <p>
            Processing completed click the download button to downlaod your
            image.
          </p>
        </div>
      </div>
      <div className="res res-right">
        <div className="res-content">
          <p>Removed Watermark</p>
          <img src={Removed} alt="non-watermarked image" />
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default ResultHeader;
