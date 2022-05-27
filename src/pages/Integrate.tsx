import React from "react";
import Updates from "../components/Home/update/Updates";
import IntegrationHeader from "../components/integrate/IntegrationHeader";

const Bounce = require("react-reveal/Bounce");

const Integrate = () => {
  return (
    <>
      <IntegrationHeader />
      <Bounce left>
        <Updates />
      </Bounce>
    </>
  );
};

export default Integrate;
