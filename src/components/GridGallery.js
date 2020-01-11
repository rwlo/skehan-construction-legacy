import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const GridGallery = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0
  });

  function openLightboxOnSource(sourceIndex) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex: sourceIndex
    });
  }

  return (
    <>
      <Row>
        <Col sm={6} md={4} lg={3}>
          <Image
            thumbnail
            src="https://live.staticflickr.com/65535/49363919787_77fa569735_z.jpg"
            onClick={() => openLightboxOnSource(0)}
            className="mb-4"
            style={{ cursor: "pointer" }}
          />
        </Col>
        <Col sm={6} md={4} lg={3}>
          <Image
            thumbnail
            src="https://live.staticflickr.com/65535/49363705116_2068257945_z.jpg"
            onClick={() => openLightboxOnSource(1)}
            className="mb-4"
            style={{ cursor: "pointer" }}
          />
        </Col>
        <Col sm={6} md={4} lg={3}>
          <Image
            thumbnail
            src="https://live.staticflickr.com/65535/49363919837_fe3ed848e9_z.jpg"
            onClick={() => openLightboxOnSource(1)}
            className="mb-4"
            style={{ cursor: "pointer" }}
          />
        </Col>
        <Col sm={6} md={4} lg={3}>
          <Image
            thumbnail
            src="https://live.staticflickr.com/65535/49363919867_5f52735e2c_z.jpg"
            onClick={() => openLightboxOnSource(1)}
            className="mb-4"
            style={{ cursor: "pointer" }}
          />
        </Col>
        <Col sm={6} md={4} lg={3}>
          <Image
            thumbnail
            src="https://live.staticflickr.com/65535/49363705201_5bebe98581_z.jpg"
            onClick={() => openLightboxOnSource(1)}
            className="mb-4"
            style={{ cursor: "pointer" }}
          />
        </Col>
      </Row>
      <FsLightbox
        toggler={lightboxController.toggler}
        sourceIndex={lightboxController.sourceIndex}
        sources={[
          "https://live.staticflickr.com/65535/49363919787_77fa569735_z.jpg",
          "https://live.staticflickr.com/65535/49363705116_2068257945_z.jpg",
          "https://live.staticflickr.com/65535/49363919837_fe3ed848e9_z.jpg",
          "https://live.staticflickr.com/65535/49363919867_5f52735e2c_z.jpg",
          "https://live.staticflickr.com/65535/49363705201_5bebe98581_z.jpg"
        ]}
      />
    </>
  );
};

export default GridGallery;
