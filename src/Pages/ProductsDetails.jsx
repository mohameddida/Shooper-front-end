import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col, Image, Button, Alert, Tabs, Tab, ListGroup, Form } from 'react-bootstrap';
import { Products } from './ProductsPage';

function ProductsDetails() {
  const { id } = useParams();
  const product = Products.find((product) => product.id === parseInt(id));
  const [showAlert, setShowAlert] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleAddToWishlist = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); 
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container className="mt-5">
      <Row className="shadow-sm p-4 mb-4 bg-white rounded align-items-center">
        <Col md={5} className="text-center">
          <Image src={product.img} alt={product.name} fluid  />
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

          <div className="d-flex  align-items-center w-100">
            <p className="mb-0">Website:</p>
            <Button variant="secondary" className="rounded-pill ms-2">"Website URL"</Button>
          </div>

          <div className="d-flex align-items-center w-100 mt-2">
            <p className="mb-0">Tags:</p>
            <Button variant="secondary" className="rounded-pill ms-2 ">Tag1 </Button>
            <Button variant="secondary" className="rounded-pill ms-2">Tag2</Button>
            <Button variant="secondary" className="rounded-pill ms-2">Tag3</Button>
          </div>

          <div className="d-flex align-items-center w-100 mt-2">
            <div className='mt-2 d-flex align-items-center w-50 '>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg>   
              <p className='mt-2 ms-2'>Add wishlist</p>
            </div>

            <div className='mt-2 d-flex align-items-center w-100  '>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
            </svg>
            <p className='mt-2 ms-2'>Alert</p>
            </div>

          </div>

     
          

          <div className="d-flex mb-3">
          
            <Button variant="secondary" className=" ms-2 w-25">Shops </Button>
            <Button variant="secondary" className=" ms-2 w-25">Descreption </Button>
            <Button variant="secondary" className=" ms-2 w-25">Details </Button>


          </div>
        </Col>
      </Row>

      
      <Row className="justify-content-end">
        <Col md="auto">
          <Form.Select aria-label="Sort by" className="w-auto">
            <option value="1">Sort by: AI shopper recommendation</option>
            <option value="2">Low prices to high</option>
            <option value="3">High prices to low</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
        <ListGroup className="mt-3 bg-light">
  <ListGroup.Item className="d-flex justify-content-between align-items-center mt-2" onClick={() => setShowDetails(!showDetails)}>
    <Image src="logo.png" alt="shop-logo" width={50} height={50} rounded />
    <div>Amazon</div>
    <div>15.00$</div>
    <div className="d-flex align-items-center">
      <span className="text-warning me-2">★★★★★</span>
      <div className="d-flex align-items-center me-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
        <p className="mt-2 ms-2">add to compare</p>
      </div>
      <Button variant="dark" className="ms-2 rounded-pill" size="sm" onClick={(e) => { e.stopPropagation(); setShowDetails(false); }}>
        {showDetails ? 'Collapse' : 'Expand'}
      </Button>
    </div>
  </ListGroup.Item>

  {showDetails && (
    <ListGroup.Item>
      <div className="row">
        <div className="col-4">
          <Image src="product-image.png" alt="product-image" fluid />
        </div>
        <div className="col-8">
          <h5>Product Name</h5>
          <p>Product description goes here. This is a sample description to showcase the expanded view.</p>
          <div>
            <span className="text-warning">★★★★★</span>
            <span className="ms-2">4.9 (123 reviews)</span>
          </div>
          <div className="mt-3">
            <p className="fw-bold">Price: $15.00</p>
            <Button variant="primary" className="me-2">Buy Now</Button>
            <Button variant="outline-primary">Add to Cart</Button>
          </div>
        </div>
      </div>
    </ListGroup.Item>
  )}
</ListGroup>











<ListGroup className="mt-3 bg-light">
  <ListGroup.Item className="d-flex justify-content-between align-items-center mt-2" onClick={() => setShowDetails(!showDetails)}>
    <Image src="logo.png" alt="shop-logo" width={50} height={50} rounded />
    <div>Amazon</div>
    <div>15.00$</div>
    <div className="d-flex align-items-center">
      <span className="text-warning me-2">★★★★★</span>
      <div className="d-flex align-items-center me-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
        <p className="mt-2 ms-2">add to compare</p>
      </div>
      <Button variant="dark" className="ms-2 rounded-pill" size="sm" onClick={(e) => { e.stopPropagation(); setShowDetails(false); }}>
        {showDetails ? 'Collapse' : 'Expand'}
      </Button>
    </div>
  </ListGroup.Item>

  {showDetails && (
    <ListGroup.Item>
      <div className="row">
        <div className="col-4">
          <Image src="product-image.png" alt="product-image" fluid />
        </div>
        <div className="col-8">
          <h5>Product Name</h5>
          <p>Product description goes here. This is a sample description to showcase the expanded view.</p>
          <div>
            <span className="text-warning">★★★★★</span>
            <span className="ms-2">4.9 (123 reviews)</span>
          </div>
          <div className="mt-3">
            <p className="fw-bold">Price: $15.00</p>
            <Button variant="primary" className="me-2">Buy Now</Button>
            <Button variant="outline-primary">Add to Cart</Button>
          </div>
        </div>
      </div>
    </ListGroup.Item>
  )}
</ListGroup>

<ListGroup className="mt-3 bg-light">
  <ListGroup.Item className="d-flex justify-content-between align-items-center mt-2" onClick={() => setShowDetails(!showDetails)}>
    <Image src="logo.png" alt="shop-logo" width={50} height={50} rounded />
    <div>Amazon</div>
    <div>15.00$</div>
    <div className="d-flex align-items-center">
      <span className="text-warning me-2">★★★★★</span>
      <div className="d-flex align-items-center me-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
        <p className="mt-2 ms-2">add to compare</p>
      </div>
      <Button variant="dark" className="ms-2 rounded-pill" size="sm" onClick={(e) => { e.stopPropagation(); setShowDetails(false); }}>
        {showDetails ? 'Collapse' : 'Expand'}
      </Button>
    </div>
  </ListGroup.Item>

  {showDetails && (
    <ListGroup.Item>
      <div className="row">
        <div className="col-4">
          <Image src="product-image.png" alt="product-image" fluid />
        </div>
        <div className="col-8">
          <h5>Product Name</h5>
          <p>Product description goes here. This is a sample description to showcase the expanded view.</p>
          <div>
            <span className="text-warning">★★★★★</span>
            <span className="ms-2">4.9 (123 reviews)</span>
          </div>
          <div className="mt-3">
            <p className="fw-bold">Price: $15.00</p>
            <Button variant="primary" className="me-2">Buy Now</Button>
            <Button variant="outline-primary">Add to Cart</Button>
          </div>
        </div>
      </div>
    </ListGroup.Item>
  )}
</ListGroup>
        </Col>
      </Row>

    </Container>
  );
}

export default ProductsDetails;
