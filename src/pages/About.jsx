import { Container, Row, Col } from "react-bootstrap";
import "../css/About.css";
import "../css/bootstrap.min.css"

function About() {
  return (
    <main className="page about-page" id="about">
      <section className="project">
        <Container className="px-4 px-lg-5">
          <div className="animated-section" style={{ paddingTop: "100px" }}>
            <div className="heading mb-5">
              <h2>THE DEVELOPER</h2>
            </div>
            <img
              src="/assets/images/deca-titles.png"
              width="100%"
              style={{ display: "block", margin: "0 auto" }}
              alt="Developer"
              className="mb-5"
            />
          </div>

          <div className="mb-5"></div>

          <Row className="mx-auto about-text">
            <Col>
              <p className="mb-4 info custom-indent">
                Urban Deca Homes is a pioneering real estate developer dedicated
                to creating innovative and sustainable living spaces. With a
                focus on quality and customer satisfaction, we strive to exceed
                expectations in every project.
              </p>

              <p className="mb-4 info custom-indent">
                We are committed to delivering exceptional residential
                developments that combine modern design with practical living
                solutions. Our projects are strategically located in key areas,
                offering residents convenient access to business districts,
                educational institutions, and lifestyle destinations.
              </p>

              <p className="mb-4 info custom-indent">
                And we are dedicated to creating innovative and sustainable
                living spaces. Our commitment to quality and customer
                satisfaction drives us to exceed expectations in every project.
              </p>

              <p className="mb-4 info custom-indent">
                With years of experience in real estate development, we
                understand the importance of creating communities that foster
                growth, comfort, and lasting relationships. Each Urban Deca
                Homes project is designed with attention to detail, quality
                construction, and sustainable practices.
              </p>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={4} className="text-center mb-4">
              <div className="feature-box">
                <i
                  className="ion-ios-home-outline"
                  style={{ fontSize: "3rem", color: "#e9bc26" }}
                ></i>
                <h4 className="mt-3">Quality Construction</h4>
                <p>
                  Built with premium materials and expert craftsmanship for
                  lasting durability.
                </p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="feature-box">
                <i
                  className="ion-ios-location-outline"
                  style={{ fontSize: "3rem", color: "#e9bc26" }}
                ></i>
                <h4 className="mt-3">Prime Locations</h4>
                <p>
                  Strategically positioned near business centers, schools, and
                  transportation hubs.
                </p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="feature-box">
                <i
                  className="ion-ios-people-outline"
                  style={{ fontSize: "3rem", color: "#e9bc26" }}
                ></i>
                <h4 className="mt-3">Community Living</h4>
                <p>
                  Designed to foster connections and create vibrant, welcoming
                  neighborhoods.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default About;
