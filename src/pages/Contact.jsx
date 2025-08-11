import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    project: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  return (
    <main className="page contact-page" id="contact">
      <Container className="animated-section" style={{ paddingTop: "100px" }}>
        <div className="heading mb-5 text-center">
          <h2>CONTACT US</h2>
          <p className="lead">
            Get in touch with us to learn more about Urban Deca Homes
          </p>
        </div>

        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="shadow-sm">
              <Card.Body className="p-5">
                <h4 className="mb-4">Send us a Message</h4>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Interested Project</Form.Label>
                        <Form.Select
                          name="project"
                          value={formData.project}
                          onChange={handleInputChange}
                        >
                          <option value="">Select a project</option>
                          <option value="ortigas">
                            Urban Deca Homes Ortigas
                          </option>
                          <option value="cubao">Urban Deca Homes Cubao</option>
                          <option value="litex">Urban Deca Homes Litex</option>
                          <option value="manila">
                            Urban Deca Homes Manila
                          </option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your inquiry..."
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      className="px-5"
                      style={{
                        backgroundColor: "#ff6b35",
                        borderColor: "#ff6b35",
                      }}
                    >
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact info moved to global Footer component */}
      </Container>
    </main>
  );
}

export default Contact;
