import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Iframe from "react-iframe";

// <iframe
//   src="https://www.flickr.com/photos/186411083@N07/49363705201/in/album-72157712608879166/player"
//   frameborder="0"
//   allowfullscreen
//   webkitallowfullscreen
//   mozallowfullscreen
//   oallowfullscreen
//   msallowfullscreen
//   width="100%"
//   height="500px"
// ></iframe>
//
// https://flickrembed.com/
// https://albumizr.com/a/r25a

function MapSection() {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5520796866394!2d-122.50527498459815!3d37.777099679758955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808587afd40d3f25%3A0x7827c4e3c0c308d6!2s607%2042nd%20Ave%2C%20San%20Francisco%2C%20CA%2094121!5e0!3m2!1sen!2sus!4v1578703535166!5m2!1sen!2sus"
              width="100%"
              height="300"
              frameborder="0"
            ></iframe>
          </Col>
          <Col md={6}>
            <p className="mb-0">This is my address</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MapSection;
