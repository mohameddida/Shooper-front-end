import React, { useState } from "react";
import { Container, Form, Pagination } from "react-bootstrap";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useLocation } from "react-router";
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
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const totalPages = Math.ceil(Products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = Products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("query");
  return (
    <Container className="d-grid p-3 mx-3 w-100">
      <h2>{query}</h2>
      <div className="d-flex justify-content-between w-100 mb-4">
        <div>{Products.length} products</div>
        <div className="d-flex  align-items-center gap-3 ">
          <Form.Label>sort by</Form.Label>
          <Form.Select className="selectFilter w-auto">
            <option value="popular">popular</option>
            <option value="min price first">min price first</option>
            <option value="max price first">Three</option>
            <option value="Date">date</option>
          </Form.Select>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-5 w-100">
        {currentProducts.map((product) => (
          <ProductsCard product={product} />
        ))}
      </div>
      <div className="pagination-container">
        <Pagination className="font-weight-bold">
          <Pagination.Prev
          className="gap-3"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <FaArrowLeftLong /> <span> Previous</span>
          </Pagination.Prev>
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            className="gap-4"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <span>Next </span>
            <FaArrowRightLong />
          </Pagination.Next>
        </Pagination>
      </div>
    </Container>
  );
};

export default ProductsPage;
