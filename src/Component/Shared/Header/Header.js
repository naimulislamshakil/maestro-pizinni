import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="banner">
      <div
        className="container d-flex align-items-center text-white"
        style={{ height: "100vh" }}
      >
        <div className="banner-description">
          <h3>Pizza Delivery</h3>
          <h2>MAESTRO PIZINNI</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            porro voluptatem.
          </p>
          <Link className="btn btn-danger text-uppercase fw-bold" to="about">
            delivery now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
