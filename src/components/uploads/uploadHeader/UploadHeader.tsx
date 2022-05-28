import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./uploadHeader.css";
import SpacedContainer from "../../common/SpacedContainer";
import uploaded from "../../../assets/upload.png";
const Fade = require("react-reveal/Fade");

const UploadHeader = () => {
    const navigate = useNavigate();
    const [fileUpload, setFileUpload] = useState("");

  return (
    <div className="upload-header">
      <Fade left>
        <SpacedContainer>
          <div className="header-content">
            <div className="header-left">
              <h1>Upload Image To Remove Watermark</h1>
              <div className="head-sum">
                <div className="head-sum-para">
                  <p>No Image?</p>
                  <p> Try one of these</p>
                </div>
                <div className="img-group">
                  <div className="one"></div>
                  <div className="two"></div>
                  <div className="three"></div>
                  <div className="four"></div>
                </div>
              </div>
            </div>
            <div className="header-right">
              <div className="top">
                <div className="top_up">
                  <label htmlFor="file-upload">
                    <img src={uploaded} alt="up arrow" />
                    <p>Upload Image</p>
                  </label>
                  <input type="file" id="file-upload" value={fileUpload} onChange={(e) => setFileUpload(e.target.value)}  />
                </div>
                <p>or drop a file on page</p>
                {fileUpload && <button onClick={() => navigate("/result")}>Remove Watermark</button>}
                <p id="sup">
                  (Supported formats: jpg, jpeg, bmp, png, tif, tiff)
                </p>
              </div>
              <p id="url">
                By uploading an image or URL you agree to our Terms of Service.
                This site is protected by hCaptcha and its Privacy Policy and
                Terms of Service apply.
              </p>
            </div>
          </div>
        </SpacedContainer>
      </Fade>
    </div>
  );
};

export default UploadHeader;
