import "../css/Home.css";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

function Home() {
  const [active, setActive] = useState(0);

  return (
    <main className="page landing-page" id="home">
      <div className="carousel-fullscreen">
        <Carousel
          className="carousel-fullscreen"
          indicators={true}
          controls={true}
          activeIndex={active}
          onSelect={(i) => setActive(i)}
        >
          <Carousel.Item className="carousel-fullscreen">
            <div className="carousel-slide-wrapper">
              <img
                className="d-block w-100 carousel-image"
                src="/assets/carousel/slide-img1.jpg"
                alt="Urban Deca Homes"
              />
              <div className="carousel-desc-overlay">
                <div className="carousel-desc-center">
                  <div className="carousel-desc-content">
                    <h1 className="text-uppercase text-light fw-bold custom-shadow text-center carousel-title">
                      Urban Deca Homes
                    </h1>
                    <p className="my-3 text-light custom-shadow carousel-description">
                      Experience the perfect blend of comfort and style in our
                      thoughtfully designed living spaces.
                    </p>
                    <div className="text-center">
                      <Button
                        size="lg"
                        className="me-2 btn-brown"
                        href="/contact"
                      >
                        Inquire Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carousel-fullscreen">
            <div className="carousel-slide-wrapper">
              <img
                className="d-block w-100 carousel-image"
                src="/assets/carousel/slide-img2.jpg"
                alt="Second slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item className="carousel-fullscreen">
            <div className="carousel-slide-wrapper">
              <img
                className="d-block w-100 carousel-image"
                src="/assets/carousel/slide-img3.jpg"
                alt="Third slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Intro Section */}
      <section className="portfolio-block block-intro">
        <Container>
          <div
            className="intro-logo fade-effect"
            style={{
              backgroundImage: `url(/assets/logos/logo-black.png)`,
              height: "70px",
              width: "70px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="about">
            <p className="typing-effect">
              Welcome to Urban Deca Homes —
              quality, affordable condo living in prime Metro Manila locations.
            </p>
          </div>
        </Container>
      </section>

      {/* Photography Section */}
      <section
        className="portfolio-block photography fade-effect"
        id="sample unit"
      >
        <Container>
          <Row className="g-0">
            {["sample-unit1.jpg", "sample-unit2.jpg", "sample-unit3.jpg"].map(
              (img, index) => (
                <Col md={6} lg={4} className="item zoom-on-hover" key={index}>
                  <a href="#sample unit">
                    <img
                      className="img-fluid image"
                      src={`/assets/images/${img}`}
                      alt={`Unit ${index + 1}`}
                    />
                  </a>
                </Col>
              )
            )}
          </Row>
        </Container>
      </section>

      {/* Spacer */}
      <div className="mb-5"></div>

      {/* Why Urban Deca Homes */}
      <section className="portfolio-block">
        <Container>
          <Row className="text-center">
            <h2 className="fw-bold mb-3" style={{ fontSize: "1.5rem" }}>
              Why Urban Deca Homes?
            </h2>
            <hr />
          </Row>
          <Row className="text-center">
            <ul
              className="list-group dropdown-effect info"
              style={{ fontSize: "1rem" }}
            >
              {[
                "Lifetime/ Perpetual Ownership",
                "Exclusive Elevator Key Card Access",
                "Security Guards roving 24/7.",
                "Free Home Loan Assistance",
                "Flexible Payment Scheme",
              ].map((item, index) => (
                <li className="list-group-item border-0" key={index}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Row>
        </Container>
      </section>

      {/* Counter Section */}
      <section className="py-4 py-xl-5 text-white text-center parallax">
        <div className="counter-bg">
          <div className="pb-2 pb-lg-1">
            <h2 className="fw-bold mb-2">
              NO. 1 MASS HOUSING DEVELOPER IN THE PHILIPPINES
            </h2>
          </div>
          <Row className="row-cols-2 row-cols-md-4">
            {[
              { count: 58, text: "Completed Projects", speed: 800 },
              { count: 20, text: "Ongoing Projects", speed: 800 },
              { count: 17, text: "Years of Corporate Existance", speed: 800 },
              { count: 84951, text: "Housing Units Sold", speed: 500 },
            ].map((item, index) => (
              <Col key={index}>
                <div className="p-3">
                  <div className="counter">
                    <i className="fa fa-code fa-2x"></i>
                    <h4
                      className="timer display-5 fw-bold text-white mb-0 count-number"
                      data-to={item.count}
                      data-speed={item.speed}
                    >
                      0
                    </h4>
                    <p className="mb-0">{item.text}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Condo Features */}
      <section className="portfolio-block projects">
        <Container>
          <div className="heading">
            <h2 className="append-up">Condo Features</h2>
          </div>
          <Row className="project-cards flip-in">
            {[
              {
                icon: "ion-ios-star-outline pop-icon",
                title: "Design",
                text: "Thoughtfully planned spaces that maximize light, airflow, and usable floor area.",
              },
              {
                icon: "ion-ios-lightbulb-outline bell-icon",
                title: "Affordability",
                text: "Flexible payment options and competitive pricing backed by trusted financing partners.",
              },
              {
                icon: "ion-ios-gear-outline rotate-icon",
                title: "Quality",
                text: "Durable construction and reliable building management for long-term value.",
              },
            ].map((feature, index) => (
              <Col md={4} className={"project-card"} key={index}>
                <div className="card special-skill-item border-0">
                  <div className="card-header bg-transparent border-0">
                    <i className={`icon ${feature.icon}`}></i>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{feature.title}</h3>
                    <p className="card-text">{feature.text}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Footer Section */}
      <section className="portfolio-block website gradient">
        <Container>
          <Row className="align-items-center">
            <Col md={12} lg={5} className="offset-lg-1 text">
              <h3>Urban Deca Homes</h3>
              <p>
                Urban Deca Homes delivers well-built, value-for-money
                condominiums with convenient access to transport, schools,
                workplaces, and malls. Our accredited team can help you choose
                the right unit and financing that fits your budget.
              </p>
            </Col>
            <Col md={12} lg={5}>
              <img src="/assets/logos/8990.png" height="250" alt="8990_logo" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="page-footer">
        <Container>
          <div className="links">
            <a href="About.jsx">About</a>
            <a href="Contact.jsx">Contact</a>
            <a href="Projects.jsx">Projects</a>
          </div>
          <div className="social-icons">
            <a href="#">
              <i className="icon ion-social-facebook"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-instagram-outline"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-twitter"></i>
            </a>
          </div>
        </Container>
      </footer>
    </main>
  );
}

export default Home;
