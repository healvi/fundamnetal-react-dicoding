import React from "react";

import { Link } from "react-router-dom";
import { ArshipPath, HomePath } from "../utils/constant";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary ">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white" to={HomePath}>
          Aplikasi Catatan
        </Link>
        <Link className="navbar-brand fw-bold text-white" to={ArshipPath}>
          Arsip
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
