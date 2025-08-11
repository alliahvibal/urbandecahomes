import { Container, Row, Col, Button } from "react-bootstrap";

function DecaLitex() {
  return (
    <main className="page project-detail-page" id="deca-litex">
      <Container style={{ paddingTop: "120px" }}>
        <Row className="text-center mb-5">
          <Col>
            <h1 className="mb-4">Urban Deca Homes Litex</h1>
            <p className="lead mb-4">
              Coming Soon - Peaceful suburban living with modern conveniences
            </p>
            <img
              src="/assets/images/litex-site.png"
              alt="Urban Deca Homes Litex"
              className="img-fluid rounded shadow mb-4"
              style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
            />
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h3 className="mb-4">Litex Community Living</h3>
            <p className="mb-4">
              Urban Deca Homes Litex offers a perfect blend of suburban
              tranquility and urban accessibility. Located in the growing Litex
              area, this development provides families with a peaceful
              environment while maintaining connectivity to Metro Manila.
            </p>

            <div className="mb-5">
              <h5>Project Highlights (Coming Soon):</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="ion-ios-checkmark text-success me-2"></i>{" "}
                  Family-friendly suburban environment
                </li>
                <li>
                  <i className="ion-ios-checkmark text-success me-2"></i> Easy
                  access to Commonwealth Avenue
                </li>
                <li>
                  <i className="ion-ios-checkmark text-success me-2"></i> Near
                  schools and healthcare facilities
                </li>
                <li>
                  <i className="ion-ios-checkmark text-success me-2"></i> Green
                  spaces and recreational areas
                </li>
                <li>
                  <i className="ion-ios-checkmark text-success me-2"></i> Modern
                  home designs with practical layouts
                </li>
              </ul>
            </div>
        <div style={{margin: "50px"}}>
            <Button
              variant="primary"
              size="lg"
              className="me-3"
              style={{ backgroundColor: "#ff6b35", borderColor: "#ff6b35" }}
              href="/contact"
            >
              Get Updates
            </Button>
            <Button variant="outline-primary" size="lg" href="/properties">
              View Other Properties
            </Button>
        </div>

          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default DecaLitex;
