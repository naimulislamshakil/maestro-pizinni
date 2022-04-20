import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="banner">
      <NavBar></NavBar>
      <div className="container">
        <div className="d-flex align-items-center" style={{ height: "100vh" }}>
          <div className="text-white banner-description">
            <h3>Pizza Delivery</h3>
            <h2>MAESTRO PIZINNI</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              sunt aliquid doloremque similique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
