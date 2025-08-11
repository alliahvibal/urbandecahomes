import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import "../css/DecaOrtigas.css";
import "../css/bootstrap.min.css";

function DecaOrtigas() {
  const floorPlans = [
    {
      name: "1-Bedroom Unit",
      size: "25 sqm",
      image: "/assets/images/1bedroom-unit.jpg",
    },
    {
      name: "2-Bedroom Unit",
      size: "35 sqm",
      image: "/assets/images/2bedroom-unit.jpg",
    },
    {
      name: "3-Bedroom Unit",
      size: "45 sqm",
      image: "/assets/images/3bedroom-unit.jpg",
    },
  ];

  const galleryImages = [
    "/assets/images/model-unit1.jpg",
    "/assets/images/model-unit2.jpg",
    "/assets/images/model-unit3.jpg",
    "/assets/images/model-unit4.jpg",
    "/assets/images/model-unit5.jpg",
    "/assets/images/model-unit6.jpg",
  ];

  return (
    <main className="page project-detail-page" id="deca-ortigas">
      <Container style={{ paddingTop: "60px" }}>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col lg={8}>
            <img
              src="./assets/images/ortigas-site-wide.png"
              alt="Urban Deca Homes Ortigas"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col lg={4}>
            <div className="project-info p-4">
              <h1 className="mb-3">Urban Deca Homes Ortigas</h1>
              <p className="lead mb-4">
                Experience premium urban living in the heart of Ortigas Central
                Business District.
              </p>

              <div className="project-highlights mb-4">
                <h5>Project Highlights:</h5>
                <ul className="list-unstyled">
                  <li>
                    <i className="ion-ios-checkmark text-success me-2"></i>{" "}
                    Prime CBD Location
                  </li>
                  <li>
                    <i className="ion-ios-checkmark text-success me-2"></i> Near
                    MRT and Business Centers
                  </li>
                  <li>
                    <i className="ion-ios-checkmark text-success me-2"></i>{" "}
                    Modern Amenities
                  </li>
                  <li>
                    <i className="ion-ios-checkmark text-success me-2"></i> 24/7
                    Security
                  </li>
                  <li>
                    <i className="ion-ios-checkmark text-success me-2"></i>{" "}
                    Shopping and Dining Nearby
                  </li>
                </ul>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-100 btn-brown"
                href="/contact"
              >
                Inquire Now
              </Button>
            </div>
          </Col>
        </Row>

        {/* Location Map */}
        <Row className="mb-5">
          <Col>
            <h3 className="mb-4">Location & Accessibility</h3>
            <Row>
              <Col md={4}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.166206920021!2d121.09806537457287!3d14.589603277346969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c771ae2ba40f%3A0xe1fa3a8c7e187df9!2sUrban%20Deca%20Homes%20Ortigas%20-%20Information%20Center!5e0!3m2!1sen!2sph!4v1754897506144!5m2!1sen!2sph"
                  title="Urban Deca Homes Ortigas Location"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  className="rounded shadow"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Col>
              <Col md={6}>
                <h5>Strategic Location Benefits:</h5>
                <ul>
                  <li>5 minutes walk to MRT Ortigas Station</li>
                  <li>Direct access to EDSA and C5</li>
                  <li>
                    Near major shopping malls (SM Megamall, Shangri-La Plaza)
                  </li>
                  <li>Close to business districts (Ortigas CBD, BGC)</li>
                  <li>Proximity to schools and hospitals</li>
                  <li>Easy access to airports via EDSA</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Floor Plans */}
        <Row className="mb-5">
          <Col>
            <h3 className="mb-4">Floor Plans & Unit Types</h3>
            <Row>
              {floorPlans.map((plan, index) => (
                <Col md={4} key={index} className="mb-4">
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      src={plan.image}
                      alt={plan.name}
                      style={{ height: "200px", objectFit: "fit" }}
                    />
                    <Card.Body className="text-center">
                      <Card.Title>{plan.name}</Card.Title>
                      <Card.Text>
                        Floor Area: <strong>{plan.size}</strong>
                      </Card.Text>
                      <Button variant="outline-primary" size="sm">
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Gallery */}
        <Row className="mb-5">
          <Col>
            <h3 className="mb-4">Model Units Gallery</h3>
            <Carousel>
              {galleryImages.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`Model unit ${index + 1}`}
                    style={{ height: "500px", objectFit: "fit" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>

      {/* Call to Action*/}
      <section className="gradient py-5" style={{marginTop: "100px"}}>
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8} className="text-center">
              <h4 className="mb-3">
                Ready to Make Urban Deca Homes Ortigas Your Home?
              </h4>
              <p className="mb-4">
                Contact us today to learn more about pricing, payment terms, and
                availability.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="me-3 btn-secondary"
                href="/contact"
              >
                Contact Sales Team
              </Button>
              <Button className="btn-outline" size="lg" href="/projects">
                View Other Projects
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default DecaOrtigas;
