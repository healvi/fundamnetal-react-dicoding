import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
  LoginPath,
  NotFoundPath,
  RegisterPath,
} from "./utils/constant";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { AuthContextProvider } from "./context/AuthContext";
import * as Middleware from "./middleware/Middleware";
const App = () => {
  const location = useLocation();
  const [pathname, setPathName] = useState();
  useEffect(() => {
    setPathName(location.pathname);
  }, [location.pathname]);
  return (
    <AuthContextProvider>
      {pathname !== "/login" && pathname !== "/register" ? <Navbar /> : <></>}
      <Routes>
        <Route
          path={HomePath}
          exact
          element={
            <Middleware.Guest>
              <Home />
            </Middleware.Guest>
          }
        />
        <Route
          path={DetailsPath}
          element={
            <Middleware.Guest>
              <Details />
            </Middleware.Guest>
          }
        />
        <Route
          path={ArshipPath}
          element={
            <Middleware.Guest>
              <Arsip />
            </Middleware.Guest>
          }
        />
        <Route
          path={CreatePath}
          element={
            <Middleware.Guest>
              <Create />
            </Middleware.Guest>
          }
        />
        <Route
          path={LoginPath}
          element={
            <Middleware.Authinticated>
              <Login />
            </Middleware.Authinticated>
          }
        />
        <Route
          path={RegisterPath}
          element={
            <Middleware.Authinticated>
              <Register />
            </Middleware.Authinticated>
          }
        />
        <Route path={NotFoundPath} element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
