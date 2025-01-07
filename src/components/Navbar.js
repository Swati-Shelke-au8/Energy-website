import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        Xurya
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#features">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link btn text-gray loginBtn" href="#login">
              Log in
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link btn text-white nav-get-in-touch-btn"
              href="#contact"
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
