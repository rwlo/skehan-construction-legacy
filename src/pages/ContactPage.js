import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactPage(props) {
  return (
    <>
      <div className="bg-light py-5">
        <Container>
          <h2 className="h4 font-weight-bold">Request A Quote</h2>
          <p>
            Please complete & submit all the information in the form below for
            an appointment to receive a quote regarding your upcoming project.
          </p>
          <Form className="mt-4">
            <Form.Row>
              <Form.Group as={Col} md={6} controlId="formGridName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="John Smith" />
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="formGridEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="user@email.com" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlService">
              <Form.Label>Service</Form.Label>
              <Form.Control as="select">
                <option>Construction</option>
                <option>General Contractor</option>
                <option>Plumbing</option>
                <option>Water Heater</option>
                <option>Other</option>
              </Form.Control>
              <Form.Text className="text-muted">
                Some other words go here..
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formGridMessage">
              <Form.Label>Leave a Message</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                placeholder="Your message..."
              />
              <Form.Text className="text-muted">
                Some other words go here..
              </Form.Text>
            </Form.Group>

            <Button variant="primary" size="lg" type="submit" className="mt-3">
              Request Quote
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default ContactPage;
