import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Developments() {
  const projects = [
    {
      id: "ortigas",
      name: "Urban Deca Homes Ortigas",
      image: "./assets/images/ortigas-site-wide.png",
      description: "Modern living spaces designed for comfort and style.",
      link: "/deca-ortigas",
    },
    {
      id: "cubao",
      name: "Urban Deca Homes Cubao",
      image: "./assets/images/cubao-site.jpg",
      description:
        "Experience urban living in the heart of Cubao with modern amenities.",
      link: "/deca-cubao",
    },
    {
      id: "litex",
      name: "Urban Deca Homes Litex",
      image: "./assets/images/litex-site.png",
      description:
        "Discover peaceful living in Litex with contemporary design and comfort.",
      link: "/deca-litex",
    },
    {
      id: "manila",
      name: "Urban Deca Homes Manila",
      image: "./assets/images/manila-site.webp",
      description:
        "Prime location in Manila offering convenience and modern lifestyle.",
      link: "/deca-manila",
    },
  ];

  return (
    <main className="page projects-page" id="developments">
      <section className="portfolio-block projects-cards animated-section">
        <Container>
          <div className="heading mb-5">
            <h2>DEVELOPMENTS</h2>
          </div>
          <Row>
            {projects.map((project) => (
              <Col md={6} lg={6} key={project.id} className="mb-4">
                <Card className="border-0 h-100">
                  <Link to={project.link}>
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.name}
                      height="280px"
                      width="100px"
                      className="scale-on-hover"
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>
                      <Link to={project.link} className="text-decoration-none">
                        {project.name}
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-muted">
                      {project.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Developments;
