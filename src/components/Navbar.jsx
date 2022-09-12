import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { ArshipPath, HomePath } from "../utils/constant";
import { BsPower, BsSun, BsFillMoonFill, BsTranslate } from "react-icons/bs";
import AuthContext from "../context/AuthContext";
import { deleteStorage } from "../utils/LocalStorage";
const Navbar = () => {
  const navigate = useNavigate();
  const { locale, theme, toggleLocale, toggleTheme } = useContext(AuthContext);
  const logOut = () => {
    deleteStorage();
    navigate("/login");
  };

  return (
    <nav className={`navbar ${theme === "light" ? "bg-primary" : "bg-dark"} `}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white" to={HomePath}>
          {locale === "id" ? "Aplikasi Catatan" : "Note Apps"}
        </Link>
        <div className="row align-items-center">
          <div className=" col-2 me-3 icons" onClick={() => toggleLocale()}>
            <BsTranslate fill="white" size={20} />
          </div>
          <div className=" col-2 me-3 icons" onClick={() => toggleTheme()}>
            {theme === "light" ? (
              <BsFillMoonFill fill="white" size={20} />
            ) : (
              <BsSun fill="white" size={20} />
            )}
          </div>

          <div className=" col-3 me-3 icons">
            <Link
              className=" col-2 navbar-brand fw-bold text-white"
              to={ArshipPath}
            >
              {locale === "id" ? " Arsip" : "Archived"}
            </Link>
          </div>
          <div className=" col-2 ms-3 icons" onClick={() => logOut()}>
            <BsPower fill="red" size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
