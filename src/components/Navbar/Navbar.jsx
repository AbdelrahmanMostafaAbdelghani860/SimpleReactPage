import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"; // Make sure to replace this with your actual CSS file path

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top py-4 custom-navbar ">
        <div className="container ">
          <Link
            className="navbar-brand text-white text-uppercase fw-bolder fs-2"
            to="">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 fs-6">
                <NavLink
                  className="nav-link font-weight-bold text-white"
                  aria-current="page"
                  to="About">
                  About
                </NavLink>
              </li>
              <li className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 fs-6">
                <NavLink
                  className="nav-link font-weight-bold text-white"
                  to="Portfolio">
                  Portofolio
                </NavLink>
              </li>
              <li className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 fs-6">
                <NavLink
                  className="nav-link font-weight-bold text-white"
                  to="Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
