import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  return (
    <Link to={`/results/products/${product.id}`} state={{ product }} className="mb-2">
      <Card>
        <Card.Body className="d-flex gap-5">
          <Card.Img variant="left" src={product.img} className="img-card mr-5" />
          <div>
            <Card.Title as="h4">{product.name}</Card.Title>
            <Col className="d-flex justify-content-between">
              <Card.Text className="title-card">{product.brand}</Card.Text>
              <Card.Text className="title-card">{product.price} $</Card.Text>
            </Col>
            <Card.Text>{product.desc}</Card.Text>
            <Row></Row>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductsCard;