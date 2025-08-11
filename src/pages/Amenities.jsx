import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { useState } from "react";
import "../css/Amenities.css";

function Amenities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    "/assets/images/perspective3.jpg",
    "/assets/images/perspective1.jpg",
    "/assets/images/perspective2.jpg",
    "/assets/images/perspective4.jpg",
    "/assets/images/perspective6.jpg",
    "/assets/images/perspective7.jpg",
  ];
  const handleSelect = (idx) => setActiveIndex(idx);
  const amenities = [
    {
      title: "Swimming Pool",
      description: "Resort-style swimming pool for relaxation and recreation",
      icon: "water-outline",
    },
    {
      title: "Fitness Center",
      description: "Fully equipped gym with modern exercise equipment",
      icon: "barbell-outline",
    },
    {
      title: "Children's Playground",
      description: "Safe and fun play area designed for kids of all ages",
      icon: "happy-outline",
    },
    {
      title: "Clubhouse",
      description: "Community center for events and social gatherings",
      icon: "home-outline",
    },
    {
      title: "Basketball Court",
      description: "Full-sized court for sports and recreational activities",
      icon: "basketball-outline",
    },
    {
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV monitoring",
      icon: "lock-closed-outline",
    },
    {
      title: "Landscaped Gardens",
      description: "Beautiful green spaces and walking paths",
      icon: "flower-outline",
    },
    {
      title: "Parking Areas",
      description: "Ample parking spaces for residents and guests",
      icon: "car-outline",
    },
  ];

  return (
    <main className="page amenities-page" id="amenities">
      <Container className="animated-section" style={{ paddingTop: "100px" }}>
        <div className="heading mb-5 text-center">
          <h2>AMENITIES</h2>
          <p className="lead">
            Discover the exceptional amenities that make Urban Deca Homes the
            perfect place to call home
          </p>
        </div>

        <Row>
          {amenities.map((amenity, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="h-100 text-center border-0 shadow-md amenity-card">
                <Card.Body className="d-flex flex-column">
                  <div className="amenity-icon mb-3">
                    <ion-icon name={amenity.icon}></ion-icon>
                  </div>
                  <Card.Title className="h5">{amenity.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {amenity.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Second row: image carousel with thumbnails */}
        <Row className="mt-5">
          <Col lg={10} className="mx-auto">
            <div className="amenities-carousel">
              <Carousel
                activeIndex={activeIndex}
                onSelect={handleSelect}
                interval={2500}
                pause="hover"
                indicators
                wrap
                touch
              >
                {slides.map((src, i) => (
                  <Carousel.Item key={i}>
                    <img
                      src={src}
                      className="d-block w-100 rounded"
                      alt={`Slide ${i + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>

              <div className="thumbs mt-3">
                <Row className="g-2 row-cols-3 row-cols-sm-4 row-cols-md-6">
                  {slides.map((src, i) => (
                    <Col key={`thumb-${i}`}>
                      <button
                        type="button"
                        className={`thumb w-100 p-0 border-0 bg-transparent ${
                          i === activeIndex ? "active" : ""
                        }`}
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                      >
                        <img src={src} alt="thumbnail" className="thumb-img" />
                      </button>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5" style={{ margin: "8rem 0" }}>
          <Col lg={8} className="mx-auto text-center">
            <h3 className="mb-4">Experience Premium Living</h3>
            <p className="lead mb-4">
              Urban Deca Homes provides world-class amenities designed to
              enhance your lifestyle. From recreational facilities to essential
              services, everything you need is within reach.
            </p>
            <Row>
              <Col md={4} className="mb-3">
                <div className="feature-stat">
                  <h4 className="mb-1">24/7</h4>
                  <p className="mb-0">Security Coverage</p>
                </div>
              </Col>
              <Col md={4} className="mb-3">
                <div className="feature-stat">
                  <h4 className="mb-1">100%</h4>
                  <p className="mb-0">Satisfaction Guarantee</p>
                </div>
              </Col>
              <Col md={4} className="mb-3">
                <div className="feature-stat">
                  <h4 className="mb-1">Premium</h4>
                  <p className="mb-0">Quality Standards</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Amenities;
