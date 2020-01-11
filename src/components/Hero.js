import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Hero() {
  return (
    <div className="mt-5">
      <div className="position-relative">
        <div
          className="position-absolute"
          style={{
            top: "50%",
            left: "50%",
            width: "320px",
            height: "90px",
            marginLeft: "-160px",
            marginTop: "-45px",
            backgroundColor: "black",
            opacity: 0.8,
            color: "white",
            textAlign: "center",
            zIndex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <span className="h4 font-weight-bolder d-block">
            General Contractor
          </span>
          <span>San Francisco, CA</span>
        </div>
        <Carousel className="mb-5" controls={false} indicators={true}>
          <Carousel.Item style={{ height: "400px", backgroundColor: "#000" }}>
            <img
              className="d-block h-100 mx-auto"
              src="https://live.staticflickr.com/65535/49363919787_77fa569735_z.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px", backgroundColor: "#000" }}>
            <img
              className="d-block h-100 mx-auto"
              src="https://live.staticflickr.com/65535/49363705116_2068257945_z.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px", backgroundColor: "#000" }}>
            <img
              className="d-block h-100 mx-auto"
              src="https://live.staticflickr.com/65535/49363705201_5bebe98581_z.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
