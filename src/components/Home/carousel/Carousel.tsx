import React from "react";
import test from "../../../assets/test.png";
import SpacedContainer from "../../common/SpacedContainer";
import "./carousel.css";
const Fade = require("react-reveal/Fade");

// const makeCarousel = require("react-reveal/makeCarousel")

const Carousel = () => {
  return (
    <SpacedContainer>
      <div className="testimonial">
        <Fade left>
        <h2>Our Users Have Something To Tell You About Us</h2>
        </Fade>
        <div className="carousel">
          <Fade bottom>
            <div className="test_card">
              <p>
                Voluptate dolore commodo incididunt sit exercitation quis
                cupidatat esse esse commodo eu ullamco. Tempor enim labore velit
                irure irure ex cillum deserunt labore ea fugiat pariatur.{" "}
              </p>
              <div className="test_foot">
                <img src={test} alt="test_img" />
                <div className="test_foot__story">
                  <h4>Sarah Hope</h4>
                  <p>
                    Product Designer <span>-Google</span>
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="test_card">
              <p>
                Voluptate dolore commodo incididunt sit exercitation quis
                cupidatat esse esse commodo eu ullamco. Tempor enim labore velit
                irure irure ex cillum deserunt labore ea fugiat pariatur.{" "}
              </p>
              <div className="test_foot">
                <img src={test} alt="test_img" />
                <div className="test_foot__story">
                  <h4>Sarah Hope</h4>
                  <p>
                    Product Designer <span>-Google</span>
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="test_card">
              <p>
                Voluptate dolore commodo incididunt sit exercitation quis
                cupidatat esse esse commodo eu ullamco. Tempor enim labore velit
                irure irure ex cillum deserunt labore ea fugiat pariatur.{" "}
              </p>
              <div className="test_foot">
                <img src={test} alt="test_img" />
                <div className="test_foot__story">
                  <h4>Sarah Hope</h4>
                  <p>
                    Product Designer <span>-Google</span>
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </SpacedContainer>
  );
};

export default Carousel;
