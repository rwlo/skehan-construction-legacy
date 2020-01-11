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
          <Form
            name="request-quote"
            action="POST"
            data-netlify="true"
            data-netlify-recaptcha="true"
            className="mt-4"
          >
            <Form.Row>
              <Form.Group as={Col} md={6} controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John Smith"
                  name="name"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="(415) 555-5555"
                  name="phone"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="user@email.com"
                name="email"
                required
              />
            </Form.Group>

            <Form.Group controlId="service">
              <Form.Label>Service</Form.Label>
              <Form.Control as="select" name="service[]">
                <option value="construction">Construction</option>
                <option value="general-contractor">General Contractor</option>
                <option value="plumbing">Plumbing</option>
                <option value="water-heater">Water Heater</option>
                <option value="other">Other</option>
              </Form.Control>
              <Form.Text className="text-muted">
                Some other words go here..
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>Leave a Message</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                placeholder="Your message..."
                name="message"
              />
              <Form.Text className="text-muted">
                Some other words go here..
              </Form.Text>
            </Form.Group>

            <div data-netlify-recaptcha="true"></div>

            <Button type="submit" variant="primary" size="lg" className="mt-3">
              Request Quote
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default ContactPage;
