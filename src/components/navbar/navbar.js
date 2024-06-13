// src/Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../navbar/navbar.css";
import piclogo from "../../images/piclogo.png";
import picoWhite from "../../images/pico-white-logo.png";
import Button from "../button/button.js";
import ArrowCircle from "../arrow-circle/arrow-circle.js";
import { Col, Row } from "react-bootstrap";
const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isHomePage ? "navbar-light bg-light" : "navbar-dark bg-dark nav"
      }`}
    >
      <div className="container-fluid">
        <div className="row w-100 align-items-center">
          <div className="col-md-4 d-flex align-items-center">
            <a className="navbar-brand" href="#">
              {isHomePage ? (
                <img src={piclogo} className="logo" alt="Pica Roon Logo" />
              ) : (
                <div className="d-flex">
                  <div className="me-2">
                  <Link to="/">
                    <ArrowCircle arrowUp={false} />
                    </Link>
                  </div>
                  <div>
                    <img
                      src={picoWhite}
                      className="logo"
                      alt="Pica Roon Logo"
                    />
                  </div>
                </div>
              )}
            </a>
          </div>
          <div className="col-md-4 text-center">
            <div className={`navbar-text tagline ${isHomePage ? "" : " nav"}`}>
              Artistic Adventures Ahoy!
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end align-items-center">
            {isHomePage && (
              <Button isRed={true} text={"Hire Us"} onClick={() => {}} />
            )}
            <div className="dropdown ms-3">
              <button className="btn btn" type="button">
                <span className="icon" style={{ color: "#ffff" }}>
                  ⋮
                </span>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
