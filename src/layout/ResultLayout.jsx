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
      <NavBar handleShow={handleClose} />

      <SideBar handleClose={handleClose} show={show} handleShow={handleClose} />
      <main
        className="main-page flex-row"
        style={{ marginLeft: "260px", marginTop: "56px" }}
      >
        <div className="d-flex w-100">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default ResultLayout;
