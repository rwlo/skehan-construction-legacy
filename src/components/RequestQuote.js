import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function MapSection() {
  return (
    <div className="bg-light border-top mt-5">
      <Container>
        <div className="text-center py-5">
          <p className="h4 font-weight-bold mb-4">Request A Free Quote!</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Request A Quote
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default MapSection;
