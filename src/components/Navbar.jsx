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
            <LinkContainer to="/" end>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/properties" end>
              <Nav.Link>Properties</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/developments" end>
              <Nav.Link>Developments</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/amenities" end>
              <Nav.Link>Amenities</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" end>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" end>
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
