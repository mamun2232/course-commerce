import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerCarousel"
            src="/picture/caro 1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Mighigan's Best Golf Deals</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerCarousel"
            src="/picture/caro 2.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Welcome to Mighigan's Best Golf Deals</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerCarousel"
            src="/picture/caro 3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Welcome to Mighigan's Best Golf Deals</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
