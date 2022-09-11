import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar bg-primary ">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white" to="/">
          Aplikasi Catatan
        </Link>
        <Link className="navbar-brand fw-bold text-white" to="/arsip">
          Arsip
        </Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
