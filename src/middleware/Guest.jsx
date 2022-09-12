import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../utils/LocalStorage";
const Guest = ({ children }) => {
  const token = getAccessToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (token === undefined || token === null) {
      navigate("/login");
    }
  }, [navigate, token]);

  return children;
};

export default Guest;
