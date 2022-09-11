import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import Arsip from "./pages/Arsip";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";
import {
  ArshipPath,
  CreatePath,
  DetailsPath,
  HomePath,
  NotFoundPath,
} from "./utils/constant";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={HomePath} element={<Home />} />
        <Route path={DetailsPath} element={<Details />} />
        <Route path={ArshipPath} element={<Arsip />} />
        <Route path={CreatePath} element={<Create />} />
        <Route path={NotFoundPath} element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
