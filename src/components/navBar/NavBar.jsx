import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          className="d-flex justify-content-end"
        >
          <Nav
            className=" my-2 my-lg-0 gap-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="d-flex justify-content-around gap-5">
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link to="/Dashboard">Dashboard</Nav.Link>
              <Nav.Link to="/Comparison">Comparison</Nav.Link>
            </div>
            <div>
              <Nav.Link
                to="/SignIn"
                role="button"
                className="px-2 mx-3 btn-login"
              >
                Sign In
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
