import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import PropertyCard from "../components/PropertyCard";

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const sampleProperties = [
    {
      id: 1,
      title: "Ortigas Tower Studio",
      price: "₱3.2M",
      type: "apartment",
      bedrooms: 1,
      bathrooms: 1,
      area: "24 sqm",
      location: "Ortigas Center, Pasig",
      image: "/assets/images/property1.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Cubao 1 Bedroom Unit",
      price: "₱4.1M",
      type: "apartment",
      bedrooms: 1,
      bathrooms: 1,
      area: "32 sqm",
      location: "Cubao, Quezon City",
      image: "/assets/images/property2.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Litex Family 2 Bedroom Unit",
      price: "₱5.6M",
      type: "apartment",
      bedrooms: 2,
      bathrooms: 1,
      area: "42 sqm",
      location: "Litex, Quezon City",
      image: "/assets/images/property3.jpg",
      featured: true,
    },
    {
      id: 4,
      title: "Manila Bay 3 Bedroom Unit",
      price: "₱8.9M",
      type: "apartment",
      bedrooms: 3,
      bathrooms: 2,
      area: "60 sqm",
      location: "Tondo, Manila",
      image: "/assets/images/property4.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Suburban Family House",
      price: "₱12.5M",
      type: "house",
      bedrooms: 4,
      bathrooms: 3,
      area: "180 sqm",
      location: "Antipolo, Rizal",
      image: "/assets/images/property5.png",
      featured: false,
    },
    {
      id: 6,
      title: "Riverside Townhouse",
      price: "₱6.8M",
      type: "townhouse",
      bedrooms: 3,
      bathrooms: 2,
      area: "95 sqm",
      location: "Marikina, Metro Manila",
      image: "/assets/images/property6.jpg",
      featured: true,
    },
  ];

  const filteredProperties = sampleProperties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || property.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <main className="page project-detail-page">
      <Container className="page py-5 pt-100" id="properties">
        {/* Page Header */}
        <Row>
          <Col>
            <div className="heading mb-5 text-center">
              <h2>Properties</h2>
              <p className="lead">Find a unit that fits your family and budget.</p>
            </div>
          </Col>
        </Row>

        {/* Search and Filter Section */}
        <Row className="mb-4">
          <Col md={8}>
            <Form.Control
              type="text"
              placeholder="Search properties by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="shadow-sm"
            />
          </Col>
          <Col md={4}>
            <Form.Select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="shadow-sm"
            >
              <option value="all">All Property Types</option>
              <option value="house">Houses</option>
              <option value="apartment">Apartments</option>
              <option value="townhouse">Townhouses</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Properties Grid */}
        <Row className="g-4">
          {filteredProperties.map((property) => (
            <Col lg={6} xl={4} key={property.id}>
              <PropertyCard property={property} />
            </Col>
          ))}
        </Row>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <Row className="py-5">
            <Col className="text-center">
              <ion-icon
                name="search-outline"
                style={{ fontSize: "4rem", color: "#6c757d" }}
              ></ion-icon>
              <h3 className="mt-3 text-muted">No properties found</h3>
              <p className="text-muted">Try adjusting your search criteria</p>
            </Col>
          </Row>
        )}

        {/* Load More Button */}
        {filteredProperties.length > 0 && (
          <Row className="mt-5">
            <Col className="text-center">
              <Button variant="outline-primary" size="lg">
                Load More Properties
              </Button>
            </Col>
          </Row>
        )}
      </Container>
    </main>
  );
};

export default Properties;
