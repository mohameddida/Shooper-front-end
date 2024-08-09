import React, { useState } from "react";
import { Button, Card, Col, Form, Offcanvas } from "react-bootstrap";
import { AiFillAppstore } from "react-icons/ai";

const SideBar = ({ handleClose, show, handleShow }) => {
  const [Price, setPrice] = useState(20);
  const Brands = [
    {
      id: 1,
      name: "H&A",
    },
    {
      id: 2,
      name: "ZARA",
    },
    {
      id: 3,
      name: "Tunisianet",
    },
    {
      id: 4,
      name: "Wiki",
    },
    {
      id: 5,
      name: "MyTek",
    },
  ];
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterClick = (filter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };
  return (
    <Col className="sidebar ">
      <Card className="w-100 h-100 border-0 card-sidebar sticky-left">
        <Card.Header className="d-flex justify-content-between">
          <div className="card-header">
            <h4 className="card-title">Store Category</h4>
          </div>
        </Card.Header>
        <Card.Body>
          <Form.Label>
            <h5>Product Location</h5>
          </Form.Label>
          <div className="d-flex justify-content-around">
            <Form.Check className="form-check d-block mb-2">
              <Form.Check.Input type="checkbox" id="Regional" />
              <Form.Check.Label htmlFor="Regional">Regional</Form.Check.Label>
            </Form.Check>
            <Form.Check className="form-check d-block mb-2">
              <Form.Check.Input type="checkbox" id="International" />
              <Form.Check.Label htmlFor="International">
                International
              </Form.Check.Label>
            </Form.Check>
          </div>
          <hr />

          <Form.Label>
            <h5>Product Ranks</h5>
          </Form.Label>
          <div className="d-block justify-content-around">
            <Form.Check className="form-check  d-flex w-100 justify-content-around">
              <Form.Check.Input
                type="checkbox"
                className="form-check-input"
                id="Stars0"
              />
              <Form.Check.Label htmlFor="5 Stars">5 Stars</Form.Check.Label>
              <Form.Check.Label htmlFor="Stars">[50]</Form.Check.Label>
            </Form.Check>
            <Form.Check className="form-check d-flex w-100 justify-content-around">
              <Form.Check.Input type="checkbox" id="Stars1" />
              <Form.Check.Label htmlFor="4 Stars">4 Stars</Form.Check.Label>
              <Form.Check.Label htmlFor="4 Stars">[20]</Form.Check.Label>
            </Form.Check>
            <Form.Check className="form-check d-flex w-100 justify-content-around">
              <Form.Check.Input type="checkbox" id="Stars2" />
              <Form.Check.Label htmlFor="3 Stars">3 Stars</Form.Check.Label>
              <Form.Check.Label htmlFor="3 Stars">[70]</Form.Check.Label>
            </Form.Check>
          </div>
          <hr />
          <Form.Label>
            <h5>Product Location</h5>
          </Form.Label>
          <div className="d-block">
            <Form.Check className="form-check w-100 d-block ">
              <Form.Range
                onChange={(e) => setPrice(e.target.value)}
                type="range"
                min="20"
                max="250"
                defaultValue={Price}
                id="price"
              />
              <span className="font">Minimun price is :${Price} - $250 </span>
            </Form.Check>
            <Button className="btn-form">Filter</Button>
          </div>
          <hr />
          <div className="d-block brand-block">
            {Brands.map((brand) => (
              <Button
                className={
                  selectedFilters.includes(brand.name)
                    ? "btn-brand-active"
                    : "btn-brand"
                }
                key={brand.id}
                onClick={() => handleFilterClick(brand.name)}
              >
                {brand.name}{" "}
              </Button>
            ))}
          </div>
        </Card.Body>
      </Card>
      <div className=" menu-btn-sidebar justify-content-center align-items-center ">
        <AiFillAppstore className="btn-clicked" onClick={handleShow} />
        <span> - filter </span>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Card className={show ? "w-100 h-100 border-0" : "d-none"}>
          <Offcanvas.Header closeButton>
            <Card.Header className="d-flex justify-content-between">
              <div className="card-header">
                <h4 className="card-title">Store Category</h4>
              </div>
            </Card.Header>
          </Offcanvas.Header>
          <Card.Body>
            <Form.Label>
              <h5>Product Location</h5>
            </Form.Label>
            <div className="d-flex justify-content-around">
              <Form.Check className="form-check d-block mb-2">
                <Form.Check.Input type="checkbox" id="Regional" />
                <Form.Check.Label htmlFor="Regional">Regional</Form.Check.Label>
              </Form.Check>
              <Form.Check className="form-check d-block mb-2">
                <Form.Check.Input type="checkbox" id="International" />
                <Form.Check.Label htmlFor="International">
                  International
                </Form.Check.Label>
              </Form.Check>
            </div>
            <hr />

            <Form.Label>
              <h5>Product Ranks</h5>
            </Form.Label>
            <div className="d-block justify-content-around">
              <Form.Check className="form-check  d-flex w-100 justify-content-around">
                <Form.Check.Input
                  type="checkbox"
                  className="form-check-input"
                  id="Stars0"
                />
                <Form.Check.Label htmlFor="5 Stars">5 Stars</Form.Check.Label>
                <Form.Check.Label htmlFor="Stars">[50]</Form.Check.Label>
              </Form.Check>
              <Form.Check className="form-check d-flex w-100 justify-content-around">
                <Form.Check.Input type="checkbox" id="Stars1" />
                <Form.Check.Label htmlFor="4 Stars">4 Stars</Form.Check.Label>
                <Form.Check.Label htmlFor="4 Stars">[20]</Form.Check.Label>
              </Form.Check>
              <Form.Check className="form-check d-flex w-100 justify-content-around">
                <Form.Check.Input type="checkbox" id="Stars2" />
                <Form.Check.Label htmlFor="3 Stars">3 Stars</Form.Check.Label>
                <Form.Check.Label htmlFor="3 Stars">[70]</Form.Check.Label>
              </Form.Check>
            </div>
            <hr />
            <Form.Label>
              <h5>Product Location</h5>
            </Form.Label>
            <div className="d-block">
              <Form.Check className="form-check w-100 d-block ">
                <Form.Range
                  onChange={(e) => setPrice(e.target.value)}
                  type="range"
                  min="20"
                  max="250"
                  defaultValue={Price}
                  id="price"
                />
                <span className="font">Minimun price is :${Price} - $250 </span>
              </Form.Check>
              <Button className="btn-form">Filter</Button>
            </div>
            <hr />
            <div className="d-block brand-block">
              {Brands.map((brand) => (
                <button
                  className={
                    selectedFilters.includes(brand.name)
                      ? "btn-brand-active"
                      : "btn-brand"
                  }
                  key={brand.id}
                  onClick={() => handleFilterClick(brand.name)}
                >
                  {brand.name}
                </button>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Offcanvas>
    </Col>
  );
};

export default SideBar;
