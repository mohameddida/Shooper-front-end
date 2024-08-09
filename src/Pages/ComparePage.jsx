import React, { useEffect, useState } from 'react';
import { Image, Button, Modal } from 'react-bootstrap';
import { Products } from './ProductsPage';
import { useParams } from 'react-router';

const ComparePage = ({ products = [] }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const firstProduct = Products.find((product) => product.id === parseInt(id));
  const [secondProduct, setSecondProduct] = useState(null);

  const handleAddToCompare = (product) => {
    if (!secondProduct) {
      setSecondProduct(product);
      setShowModal(false);
    } else {
      alert('You can only compare two products at a time.');
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    console.log(firstProduct);
    console.log(Products);
  }, [firstProduct]);

  return (
    <div>
      <h1>Compare Products</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {firstProduct && (
          <div>
            <Image src={firstProduct.img} alt={firstProduct.name} style={{ width: '100px', height: '100px' }} />
            <h2>{firstProduct.name}</h2>
            <p>{firstProduct.desc}</p>
            <p>Rating: {firstProduct.rate}</p>
            <p>Brand: {firstProduct.brand}</p>
            <p>Price: ${firstProduct.price}</p>
          </div>
        )}
        {secondProduct && (
          <div style={{ marginLeft: '20px' }}>
            <Image src={secondProduct.img} alt={secondProduct.name} style={{ width: '100px', height: '100px' }} />
            <h2>{secondProduct.name}</h2>
            <p>{secondProduct.desc}</p>
            <p>Rating: {secondProduct.rate}</p>
            <p>Brand: {secondProduct.brand}</p>
            <p>Price: ${secondProduct.price}</p>
          </div>
        )}
        {(!firstProduct || !secondProduct) && (
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: 'grey',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '20px',
              cursor: 'pointer',
            }}
            onClick={handleShowModal}
          >
            <h1 style={{ color: 'white' }}>+</h1>
          </div>
        )}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Select Products to Compare</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Products.length === 0 ? (
            <p>No products available for comparison.</p>
          ) : (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {Products.filter((product) => product.id !== parseInt(id)).map((product) => (
                <li key={product.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <Image src={product.img} alt={product.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                  <h2 style={{ fontSize: '16px', marginRight: '10px' }}>{product.name}</h2>
                  <Button onClick={() => handleAddToCompare(product)}>Add to Compare</Button>
                </li>
              ))}
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ComparePage;