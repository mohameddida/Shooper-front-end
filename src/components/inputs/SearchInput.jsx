import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { LuSend } from "react-icons/lu";
import { useNavigate } from "react-router";
import "../../styles/index.css";
const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/results?query=${encodeURIComponent(searchTerm)}`);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-100">
      <InputGroup className="col-md-6 searchBar mx-auto border border-1 my-3 d-flex align-items-center justify-content-between py-1 px-2 rounded-pill">
        <Form.Control
          type="text"
          placeholder="Search"
          aria-placeholder="white"
          className="searchBar input-search border-0 w-auto rounded-pill py-1 px-2"
          aria-label="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <InputGroup.Text
          className="border-0"
          onClick={handleSubmit}
          style={{ cursor: "pointer" }}
        >
          <LuSend />
        </InputGroup.Text>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
