import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://polite-bubblegum-8fcb31.netlify.app/images/image.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Mighigan's Best Golf Deals</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[400px]"
            src="https://polite-bubblegum-8fcb31.netlify.app/images/image.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Welcome to Mighigan's Best Golf Deals</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[400px]"
            src="https://polite-bubblegum-8fcb31.netlify.app/images/image.jpg"
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
