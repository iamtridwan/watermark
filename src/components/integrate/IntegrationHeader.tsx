import React from "react";
import "./int-header.css"
const Fade = require("react-reveal/Fade");
const IntegrationHeader = () => {
  return (
    <div style={intStyle}>
      <Fade left>
        <h1>Integration & APIs</h1>
      </Fade>
    </div>
  );
};

const intStyle = {
  height: "308px",
  backgroundColor: "#FFE2B1",
  color: "#2D3047",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "150vh",
};
export default IntegrationHeader;
