import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSession } from "../utils/Session";
const Guest = ({ children }) => {
  const token = getSession("token");
  const navigate = useNavigate();
  useEffect(() => {
    console.log("unauthincated");
    if (token === undefined || token === null) {
      navigate("/login");
    }
  }, [navigate, token]);

  return children;
};

export default Guest;
