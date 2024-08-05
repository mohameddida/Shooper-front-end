import React from "react";
import { Container } from "react-bootstrap";
import produt1 from "../asset/products/robe/1.jpg";
import produt2 from "../asset/products/robe/images (1).jpeg";
import produt3 from "../asset/products/robe/images (2).jpeg";
import produt4 from "../asset/products/robe/images.jpeg";
import produt5 from "../asset/products/robe/pexels-cottonbro-7299449.jpg";
import produt6 from "../asset/products/robe/pexels-cottonbro-7322291.jpg";
import produt7 from "../asset/products/robe/pexels-darina-belonogova-7541492.jpg";
import ProductsCard from "../components/Cards/ProductsCard";

const ProductsPage = () => {
  const Products = [
    {
      id: 0,
      img: produt1,
      name: "robe noire",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
      rate: 5,
      brand: "ZARA",
      price: 8.0,
    },
    {
      id: 1,
      img: produt2,
      name: "robe noire",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
      rate: 5,
      brand: "H&A",
      price: 4.0,
    },
    {
      id: 2,
      img: produt3,
      name: "robe noire",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
      rate: 5,
      brand: "H&A",
      price: 4.0,
    },
    {
      id: 3,
      img: produt4,
      name: "robe noire",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
      rate: 5,
      brand: "JUMIA",
      price: 2.0,
    },
    {
      id: 4,
      img: produt5,
      name: "robe noire",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
      rate: 5,
      brand: "pretty little thing",
      price: 5.0,
    },
    {
      id: 5,
      img: produt7,
      name: "robe noire",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
      rate: 5,
      brand: "H&A",
      price: 6.0,
    },
    {
      id: 6,
      img: produt6,
      name: "robe noire",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
      rate: 5,
      brand: "JUMIA - TUNISIE",
      price: 3.0,
    },
  ];
  return (
    <Container className="d-grid ">
      {Products.map((product) => (
        <ProductsCard product={product} />
      ))}
    </Container>
  );
};

export default ProductsPage;
