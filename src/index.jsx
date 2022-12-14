import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/style.scss";
import "@popperjs/core";
import "bootstrap";
const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
