import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { LuSend } from "react-icons/lu";
import "../../styles/index.css";

const SearchInput = ({ onSend }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSend = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      onSend(searchTerm);
      setSearchTerm("");
    }
  };

  return (
    <form onSubmit={handleSend} className="w-100">
      <InputGroup className="col-md-8 mx-auto border border-1 my-3 d-flex align-items-center justify-content-between py-1 px-2 rounded-pill">
        <Form.Control
          type="text"
          placeholder="Type a message..."
          className="input-search border-0 w-auto rounded-pill py-1 px-2"
          value={searchTerm}
          onChange={handleChange}
        />
        <InputGroup.Text
          className="border-0"
          onClick={handleSend}
          style={{ cursor: "pointer" }}
        >
          <LuSend />
        </InputGroup.Text>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
