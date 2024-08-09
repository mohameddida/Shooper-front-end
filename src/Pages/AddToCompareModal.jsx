import React, { useState } from 'react';
import { Modal, Image, Row, Col } from 'react-bootstrap';

const AddToCompareModal = ({ product, show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add to Compare</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={5} className="text-center">
            <Image src={product.img} alt={product.name} fluid />
          </Col>
          <Col md={7}>
            <h1 className="mb-3">{product.name}</h1>
            <p>{product.bio}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p>{product.desc}</p>
            <p><strong>Price:</strong> {product.price} $</p>
            <div className="d-flex align-items-center mb-3">
              <div className="d-flex align-items-center">
                <span className="text-warning me-2">★★★★★</span>
                <span>(1598 reviews)</span>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default AddToCompareModal;