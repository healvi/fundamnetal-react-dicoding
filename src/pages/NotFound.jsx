import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomePath } from "../utils/constant";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Not Found";
    setTimeout(() => {
      navigate(HomePath);
    }, 5000);
  }, [navigate]);

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h3> Oops! Page tidak ditemukan </h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>Maaf, page yang anda cari tidak tersedia</h2>
        <h3>Kembali dalam 5 detik</h3>
      </div>
    </div>
  );
};

export default NotFound;
