import React from "react";
import HowHeader from "../components/how/howHeader/HowHeader";
import Magic from "../components/how/magic/Magic";
import Updates from "../components/Home/update/Updates";
const Bounce = require("react-reveal/Bounce");

const How = () => (
  <>
    <HowHeader />
    <Magic />
    <Bounce left>
      <Updates />
    </Bounce>
  </>
);

export default How;
