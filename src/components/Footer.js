import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="border-top py-4">
      <Container>
        <Row>
          <Col md={6}>
            <div className="d-block d-md-none mb-4">
              <a
                href="http://www.cslb.ca.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark text-decoration-none"
              >
                California State License Board
              </a>
              <p className="mb-0">LIC # 000005</p>
            </div>
            <a
              href="mail-to: info@email.com"
              className="d-block text-dark text-decoration-none"
            >
              Email: info@email.com
            </a>
            <a
              href="tel:5555555555"
              className="d-block text-dark text-decoration-none"
            >
              Phone: +1 (555) 555-5555
            </a>
          </Col>
          <Col md={6} className="d-none d-md-block text-right">
            <a
              href="http://www.cslb.ca.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark text-decoration-none"
            >
              California State License Board
            </a>
            <p className="mb-0">LIC # 000005</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
