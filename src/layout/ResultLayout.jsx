import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/NavBar.jsx";
import SideBar from "../components/sideBar/SideBar.jsx";
import "../styles/index.css";
const ResultLayout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(!show);
  // const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-grid">
      <NavBar handleShow={handleClose} />
        <main className="main-page">
          <div className="col-3 d-flex">
            <SideBar
              handleClose={handleClose}
              show={show}
              handleShow={handleClose}
            />
          </div>
          <div className="d-flex col-9">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default ResultLayout;
