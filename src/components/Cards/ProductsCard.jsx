import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { PiArrowsLeftRightFill } from "react-icons/pi";
import { RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  return (
    <Card style={{ width: "20rem", height: "35rem" }}>
      <Link to={`/results/products/${product.id}`} className="mb-2 ">
        <Card.Header className="w-100 m-0 p-0 border-0">
          <Card.Img variant="top" src={product.img} className="img-card " />
        </Card.Header>
      </Link>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>

        <Card.Text>{product.desc}</Card.Text>
        <Card.Text> $ {product.price}</Card.Text>
        <Card.Text>
          <RiStarSFill className="text-warning" />
          <RiStarSFill className="text-warning" />
          <RiStarSFill className="text-warning" />
          <RiStarSFill className="text-warning" />
          <RiStarSFill className="text-warning" />
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-transparent border border-0  d-flex align-items-center">
        <Button className="bg-transparent  border border-0 text-black texet-left w-100 gap-3">
            <PiArrowsLeftRightFill />
          <span> Add compare</span>
        </Button>
        <Button className="bg-transparent border border-0 text-center text-black w-100 text-sm">
            <FaRegHeart />{" "}
          <span> Add wishelist</span>
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ProductsCard;
