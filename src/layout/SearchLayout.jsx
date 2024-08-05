import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import product1 from "../asset/products/pexels-alexandra-maria-58259-336372.jpg";
import product2 from "../asset/products/pexels-anastasiya-gepp-654466-1462637.jpg";
import product3 from "../asset/products/pexels-junior-teixeira-1064069-2047905.jpg";
import product4 from "../asset/products/pexels-life-of-pix-7974.jpg";
import product5 from "../asset/products/pexels-marleneleppanen-1183266.jpg";
import product6 from "../asset/products/pexels-morningtrain-18105.jpg";
import product7 from "../asset/products/pexels-mota-701877.jpg";
import product8 from "../asset/products/pexels-spencer-selover-142259-428338.jpg";
import SearchInput from "../components/inputs/SearchInput";
import NavBar from "../components/navBar/NavBar";
import "../styles/index.css";
const SearchLayout = ({ search, openvoicesearch }) => {
  const [input, setinput] = useState("");
  const [showSuggestings, setShowSuggestions] = useState(false);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (/^[a-zA-z0-9].*/.test(input) || /^[a-zA-z0-9]+" ".*/.test(input)) {
      search(input);
    }
  };
  const suggestionsInfo = [
    {
      id: 1,
      name: product1,
    },
    {
      id: 2,
      name: product2,
    },
    {
      id: 3,
      name: product3,
    },
    {
      id: 4,
      name: product4,
    },
    {
      id: 5,
      name: product5,
    },
    {
      id: 6,
      name: product6,
    },
    {
      id: 7,
      name: product7,
    },
    {
      id: 8,
      name: product8,
    },
  ];
  const handlebutton = () => {
    if (/^[a-zA-z0-9].*/.test(input) || /^[a-zA-z0-9]+" ".*/.test(input)) {
      search(input);
    }
  };

  const clearinput = () => {
    setinput("");
  };
  return (
    <Container className="d-grid justifiy-content-center p-3 h-100">
      <Row>
        <NavBar />
      </Row>
      <div className="fixed-bottom">
        <Container>
          <Row className="text-center">
            <h4>SHOOPER</h4>
          </Row>
          <SearchInput />
        </Container>
      </div>
    </Container>
  );
};

export default SearchLayout;
