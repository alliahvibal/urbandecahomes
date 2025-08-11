import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function DecaManila() {
  return (
    <main className="page project-detail-page" id="deca-manila">
      <Container style={{ paddingTop: "120px" }}>
        <Row className="text-center mb-5">
          <Col>
            <h1 className="mb-4">Urban Deca Homes Manila</h1>
            <p className="lead mb-4">
              Coming Soon - Premium urban living in the heart of Manila
            </p>
            <img
              src="/assets/images/manila-site.webp"
              alt="Urban Deca Homes Manila"
              className="img-fluid rounded shadow mb-4"
              style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
            />
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h3 className="mb-4">Manila Metropolitan Living</h3>
            <p className="mb-4">
              Urban Deca Homes Manila will be positioned in one of the most
              historic and culturally rich areas of the Philippines. Experience
              the vibrant city life while enjoying modern residential amenities
              and conveniences.
            </p>

            <div className="mb-5">
              <h5>Location Advantages (Coming Soon):</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="ion-ios-checkmark text-success me-2"></i>{" "}
                  Central Manila location with rich history
                </li>
                <li>
                  <i className="ion-ios-checkmark text-success me-2"></i> Near
                  cultural landmarks and attractions
                </li>
                <li>
                  <i className="ion-ios-checkmark text-success me-2"></i>{" "}
                  Excellent public transportation access
                </li>
                <li>
                  <i className="ion-ios-checkmark text-success me-2"></i> Close
                  to universities and business centers
                </li>
                <li>
                  <i className="ion-ios-checkmark text-success me-2"></i> Modern
                  urban lifestyle amenities
                </li>
              </ul>
            </div>
            <div style={{ margin: "50px" }}>
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                size="lg"
                className="me-3"
                style={{ backgroundColor: "#ff6b35", borderColor: "#ff6b35" }}
              >
                Get Updates
              </Button>
              <Button
                as={Link}
                to="/properties"
                variant="outline-primary"
                size="lg"
              >
                View Other Properties
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default DecaManila;
