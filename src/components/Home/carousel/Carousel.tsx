import React from "react";
import test from "../../../assets/test.png";
import SpacedContainer from "../../common/SpacedContainer";
import "./carousel.css";

// const makeCarousel = require("react-reveal/makeCarousel")


type Props = {};

const Carousel = (props: Props) => {
  return (
    <SpacedContainer>
      <div className="testimonial">
        <h2>Our Users Have Something To Tell You About Us</h2>
        <div className="carousel">
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
        </div>
      </div>
    </SpacedContainer>
  );
};

export default Carousel;
