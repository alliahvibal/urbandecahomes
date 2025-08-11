import { Container, Row, Col, Button } from "react-bootstrap";

function DecaCubao() {
  return (
    <main className="page project-detail-page" id="deca-cubao">
      <Container style={{ paddingTop: "120px" }}>
        <Row className="text-center mb-5">
          <Col>
            <h1 className="mb-4">Urban Deca Homes Cubao</h1>
            <p className="lead mb-4">
              Coming Soon - Urban living in the vibrant heart of Cubao
            </p>
            <img
              src="/assets/images/cubao-site.jpg"
              alt="Urban Deca Homes Cubao"
              className="img-fluid rounded shadow mb-4"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h3 className="mb-4">Strategic Cubao Location</h3>
            <p className="mb-4">
              Urban Deca Homes Cubao will be strategically located in one of
              Metro Manila's busiest commercial and transportation hubs. Enjoy
              easy access to shopping centers, business districts, and multiple
              transportation options.
            </p>

            <div className="mb-5">
              <h5>Key Features (Coming Soon):</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="ion-ios-checkmark text-success me-2"></i> Near
                  Araneta Coliseum and Gateway Mall
                </li>
                <li>
                  <i className="ion-ios-checkmark text-success me-2"></i>{" "}
                  Multiple transportation hubs (MRT, LRT, Bus)
                </li>
                <li>
                  <i className="ion-ios-checkmark text-success me-2"></i>{" "}
                  Walking distance to major commercial centers
                </li>
                <li>
                  <i className="ion-ios-checkmark text-success me-2"></i> Modern
                  residential design
                </li>
                <li>
                  <i className="ion-ios-checkmark text-success me-2"></i>{" "}
                  Premium amenities and facilities
                </li>
              </ul>
            </div>

        <div style={{margin: "50px"}}>
            <Button
              variant="primary"
              size="lg"
              className="me-3"
              href="/contact"
            >
              Get Updates
            </Button>
            <Button variant="outline-primary" size="lg" href="/projects">
              View Other Projects
            </Button>
        </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default DecaCubao;
