import React from "react";
import "./int-header.css"
const Pulse = require("react-reveal/Pulse");
const IntegrationHeader = () => {
  return (
    <div style={intStyle}>
      <Pulse left>
        <h1>Integration & APIs</h1>
      </Pulse>
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
