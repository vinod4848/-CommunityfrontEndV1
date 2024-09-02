/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const Navigation = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Community
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-3 mb-lg-0 d-flex">
            <li className="nav-item mx-2">
              <a className="nav-link" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" aria-current="page" href="#">
                Services
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" aria-current="page" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="btn btn-outline-success" aria-current="page" href="/buysellDtails">
              Login/SignUp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
