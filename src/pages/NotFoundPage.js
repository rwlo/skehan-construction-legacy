import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import PageHeader from "../components/PageHeader";

function NotFoundPage(props) {
  return (
    <Container className="mb-5">
      <PageHeader title="404" subTitle="Page Not Found" />
      <Link exact to="/" className="btn btn-light">
        Go back to Home
      </Link>
    </Container>
  );
}

export default NotFoundPage;
