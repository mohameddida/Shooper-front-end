import React from "react";
import "../../styles/index.css"; // Assurez-vous que le chemin vers le CSS est correct

const FormRegister = () => {
  return (
    <div className="form-register">
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <div className="input">
          <input type="email" id="email" placeholder="Value" />
          <span className="error"></span>
        </div>
      </div>
      <div className="input-field">
        <label htmlFor="name">Name</label>
        <div className="input">
          <input type="text" id="name" placeholder="Value" />
          <span className="error"></span>
        </div>
      </div>
      <div className="input-field">
        <label htmlFor="password">Password</label>
        <div className="input">
          <input type="password" id="password" placeholder="Value" />
          <span className="error"></span>
        </div>
      </div>
      <div className="input-field">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="input">
          <input type="password" id="confirmPassword" placeholder="Value" />
          <span className="error"></span>
        </div>
      </div>
      <button className="button">
        <span className="button-text">Sign In</span>
      </button>
    </div>
  );
};

export default FormRegister;
