import { createContext, useEffect, useMemo, useState } from "react";
import { axiosauth } from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { getSession } from "../utils/Session";
const AuthContext = createContext();
const AuthContextProvider = (props) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const [locale, setLocale] = useState("id");
  const [theme, setTheme] = useState("light");
  const [token] = useState(() => getSession("token"));

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      return prevLocale === "id" ? "en" : "id";
    });
  };
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  };
  const authContext = useMemo(() => {
    return {
      token,
      users,
      locale,
      theme,
      toggleLocale,
      toggleTheme,
    };
  }, [locale, theme, token, users]);

  const getUser = async () => {
    await axiosauth
      .get("/users/me")
      .then((response) => {
        console.log("user data");
        setUsers(response.data);
      })
      .catch((e) => {
        navigate("/login");
      });
  };
  useEffect(() => {
    getUser();
  }, [token]);

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
export { AuthContextProvider };
export default AuthContext;
