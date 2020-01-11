import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Hero from "../components/Hero";
import PageHeader from "../components/PageHeader";
import RequestQuote from "../components/RequestQuote";

function HomePage(props) {
  return (
    <>
      <Container>
        <Hero />
        <PageHeader title="Services" subTitle="Placeholder" />
        <CardDeck className="sc-card-deck">
          <Card>
            <Card.Body>
              <Card.Title>Construction</Card.Title>
              <Card.Text>
                This card has even longer content than the first to show that
                equal height action.
              </Card.Text>
              <Link to="/contact" className="card-link">
                Get Quote
              </Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Plumbing</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
              <Link to="/contact" className="card-link">
                Get Quote
              </Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Water Heater Installation</Card.Title>
              <Card.Text>
                This card has even longer content than the first to show that
                equal height action.
              </Card.Text>
              <Link to="/contact" className="card-link">
                Get Quote
              </Link>
            </Card.Body>
          </Card>
        </CardDeck>
        <PageHeader title="About Us" />
        <p>
          We are a Residential and Commercial General Contractor serving San
          Francisco and the Peninsula since 1995. We have been incorporated
          since 2001. Our staff consists of highly skilled and dedicated
          employees; there is always someone from our management team either in
          the office or available just a phone call away to answer any questions
          that may arise during your remodel planning.
        </p>
        <p>
          Our terms and conditions are stated on the back side of all contract
          and proposal letters. Upon authorization of your contract and
          proposal, our office manager or director of operations will contact
          you to discuss the scheduling of work and/or a letter will be mailed
          confirming receipt of your signed contract and payment terms.
        </p>
        <p>
          We are confident when your contract is signed for approval; you will
          be 100% satisfied with the outcome. We use only top of the line
          subcontractors and material suppliers. We are fully insured and
          maintain California Workers Compensation for all our employees.
        </p>
      </Container>
      <RequestQuote />
    </>
  );
}

export default HomePage;
