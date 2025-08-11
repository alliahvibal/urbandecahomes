import { Container, Row, Col } from "react-bootstrap";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="site-footer mt-5">
      <div className="footer-top py-4">
        <Container>
          <Row className="g-3 row-cols-1 row-cols-md-4 text-center text-md-start">
            <Col>
              <div className="footer-brand">
                <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                  <a
                    href="/"
                    className="footer-logo d-inline-flex align-items-center"
                    aria-label="Urban Deca Homes"
                  >
                    <img src="/assets/logos/logo.png" alt="Urban Deca Homes" />
                  </a>
                  <span className="footer-brand-name">Urban Deca Homes</span>
                </div>
              </div>
            </Col>
            <Col>
              <div className="footer-col">
                <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
                  <ion-icon
                    class="footer-inline-icon"
                    name="location-outline"
                    aria-hidden="true"
                  ></ion-icon>
                  <h6 className="footer-title mb-0">Visit Our Office</h6>
                </div>
                <p className="mb-0 footer-text">
                  123 Business District
                  <br />
                  Makati City, Metro Manila
                  <br />
                  Philippines 1200
                </p>
              </div>
            </Col>

            <Col>
              <div className="footer-col">
                <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
                  <ion-icon
                    class="footer-inline-icon"
                    name="call-outline"
                    aria-hidden="true"
                  ></ion-icon>
                  <h6 className="footer-title mb-0">Call Us</h6>
                </div>
                <p className="mb-0 footer-text">
                  Phone: +63 2 8123 4567
                  <br />
                  Mobile: +63 917 123 4567
                  <br />
                  Toll-free: 1800 DECA (3322)
                </p>
              </div>
            </Col>

            <Col>
              <div className="footer-col">
                <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
                  <ion-icon
                    class="footer-inline-icon"
                    name="mail-outline"
                    aria-hidden="true"
                  ></ion-icon>
                  <h6 className="footer-title mb-0">Email Us</h6>
                </div>
                <p className="mb-0 footer-text">
                  info@urbandecahomes.com
                  <br />
                  sales@urbandecahomes.com
                  <br />
                  support@urbandecahomes.com
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom py-3">
        <Container>
          <Row>
            <Col className="text-center small">
              <span>
                © {new Date().getFullYear()} Urban Deca Homes. All rights
                reserved.
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
