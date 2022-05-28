import React from "react";
import Benefits from "../components/Home/benefit/Benefits";
import Carousel from "../components/Home/carousel/Carousel";
import Header from "../components/Home/header/Header";
import Integration from "../components/Home/homeIntegration/Integration";
import Updates from "../components/Home/update/Updates";
import HorizontalScroll from "../components/scroll/horizontalScroll/HorizontalScroll";
const Fade = require("react-reveal/Fade");
const Zoom = require("react-reveal/Zoom");

const Home = () => {
  return (
    <>
      <Header />
      <HorizontalScroll />
      <Benefits />
      <Fade bottom>
        <Integration />
      </Fade>
      <Zoom>
        <Carousel />
      </Zoom>

      <Updates />
    </>
  );
};

export default Home;
