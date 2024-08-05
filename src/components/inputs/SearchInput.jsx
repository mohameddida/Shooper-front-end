import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "../../styles/index.css";
const SearchInput = () => {
  return (
    <InputGroup className="col-md-6 mx-auto text-white bg-secondary border border-1 my-3 d-flex align-items-center justify-content-between py-1 px-2 rounded-pill">
      <Form.Control
        type="text"
        placeholder="Search"
        className="bg-secondary placeholder-white text-white input-search border-0 w-auto rounded-pill py-1 px-2"
        aria-label="Search"
      />
      <InputGroup.Text className="bg-secondary text-white border-0">
        <FaSearch className="" />
      </InputGroup.Text>
    </InputGroup>
  );
};

export default SearchInput;
