import React from "react";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import PageHeader from "../components/PageHeader";
import RequestQuote from "../components/RequestQuote";

function CommercialPage(props) {
  return (
    <>
      <Container>
        <Hero />
        <PageHeader
          title="Commercial Projects"
          subTitle="Something goes here..."
        />
        <p>
          We are a Residential and Commercial General Contractor serving San
          Francisco and the Peninsula since 1995. We have been incorporated
          since 2001. Our staff consists of highly skilled and dedicated
          employees; there is always someone from our management team either in
          the office or available just a phone call away to answer any questions
          that may arise during your remodel planning.
        </p>
        <PageHeader title="Past Clients" />
        <ul>
          <li>Client Name</li>
          <li>Client Name</li>
          <li>Client Name</li>
        </ul>
      </Container>
      <RequestQuote />
    </>
  );
}

export default CommercialPage;
