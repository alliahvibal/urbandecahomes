import React from "react";
import { Card, Button } from "react-bootstrap";

const PropertyCard = ({ property, onViewDetails }) => {
  return (
    <Card className="h-100 shadow-sm border-0 property-card">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={
            property.image ||
            "https://via.placeholder.com/300x200?text=Property+Image"
          }
          alt={property.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        {property.featured && (
          <div className="position-absolute top-0 start-0 m-2">
            <span className="badge bg-primary">Featured</span>
          </div>
        )}
        {property.status && (
          <div className="position-absolute top-0 end-0 m-2">
            <span
              className={`badge ${
                property.status === "sold" ? "bg-danger" : "bg-success"
              }`}
            >
              {property.status.toUpperCase()}
            </span>
          </div>
        )}
      </div>

      <Card.Body className="d-flex flex-column">
        <div className="mb-2">
          <Card.Title className="h5 mb-1">{property.title}</Card.Title>
          <div className="text-muted small mb-2 d-flex align-items-center">
            <ion-icon name="location-outline" className="me-1"></ion-icon>
            {property.location}
          </div>
        </div>

        <div className="mb-3">
          <div className="row g-2 text-muted small">
            <div className="col-4 d-flex align-items-center">
              <ion-icon name="bed-outline" className="me-1"></ion-icon>
              {property.bedrooms} bed
            </div>
            <div className="col-4 d-flex align-items-center">
              <ion-icon name="water-outline" className="me-1"></ion-icon>
              {property.bathrooms} bath
            </div>
            <div className="col-4 d-flex align-items-center">
              <ion-icon name="resize-outline" className="me-1"></ion-icon>
              {property.area}
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center">
            <div className="h4 fw-bold mb-0" style={{ color: "#c89e2b" }}>{property.price}</div>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => onViewDetails && onViewDetails(property)}
            >
              View Details
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PropertyCard;
