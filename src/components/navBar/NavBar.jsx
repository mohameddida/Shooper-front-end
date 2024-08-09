import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = ({ messages }) => {
  return (
    <Navbar expand="lg" className="fixed-navbar bg-white">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="d-flex w-100">
          <Nav
            className=" my-2 my-lg-0 gap-5 d-flex justify-content-between
             container-fluid"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="d-flex justify-content-around gap-5">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/Comparison">Comparison</Nav.Link>
            </div>
            <div className={messages?.length !== 0 ? "d-flex" : "d-none"}>
              <h5>SHOOPER</h5>
            </div>
            <div>
              <Nav.Link
                href="/SignIn"
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
