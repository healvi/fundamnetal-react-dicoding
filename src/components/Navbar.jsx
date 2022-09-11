import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
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

export default Navbar;
