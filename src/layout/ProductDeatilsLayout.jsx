import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/NavBar.jsx";
import "../styles/index.css";
const ResultLayout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(!show);
  return (
    <>
      <div className="d-grid">
      <NavBar handleShow={handleClose} />
        <main className="main-page">
          <div className="d-flex col-9">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default ResultLayout;
