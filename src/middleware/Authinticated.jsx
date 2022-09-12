import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getSession } from "../utils/Session";
const Authinticated = ({ children }) => {
  const token = getSession("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token !== undefined && token !== null) {
      navigate("/");
    }
  }, [navigate, token]);
  return children;
};

export default Authinticated;
