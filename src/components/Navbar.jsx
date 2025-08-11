import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <BootstrapNavbar
      variant="dark"
      expand="lg"
      fixed="top"
      className="bg-white portfolio-navbar gradient"
    >
      <Container>
        <LinkContainer to="/">
          <BootstrapNavbar.Brand className="logo d-flex align-items-center">
            <img
              src="/assets/logos/logo.png"
              width="50"
              height="60"
              alt="Urban Deca Homes"
              className="me-2"
            />
            Urban Deca Homes
          </BootstrapNavbar.Brand>
        </LinkContainer>

        <BootstrapNavbar.Toggle aria-controls="navbarNav" />
        <BootstrapNavbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link className={location.pathname === "/" ? "active" : ""}>
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/properties">
              <Nav.Link
                className={location.pathname === "/properties" ? "active" : ""}
              >
                Properties
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link
                className={location.pathname === "/projects" ? "active" : ""}
              >
                Projects
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/amenities">
              <Nav.Link
                className={location.pathname === "/amenities" ? "active" : ""}
              >
                Amenities
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link
                className={location.pathname === "/about" ? "active" : ""}
              >
                About
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link
                className={location.pathname === "/contact" ? "active" : ""}
              >
                Contact Us
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
