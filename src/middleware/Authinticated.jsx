import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAccessToken } from "../utils/LocalStorage";
const Authinticated = ({ children }) => {
  const token = getAccessToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (token !== undefined && token !== null) {
      navigate("/");
    }
  }, [navigate, token]);
  return children;
};

export default Authinticated;
