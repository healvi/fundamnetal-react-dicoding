import { createContext, useEffect, useMemo, useState } from "react";
import { axiosauth } from "../utils/axios";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
const AuthContextProvider = (props) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const [locale, setLocale] = useState("id");
  const [theme, setTheme] = useState("");

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      return prevLocale === "id" ? "en" : "id";
    });
  };
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      let newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };
  const authContext = useMemo(() => {
    return {
      users,
      locale,
      theme,
      toggleLocale,
      toggleTheme,
    };
  }, [locale, theme, users]);

  const getUser = async () => {
    await axiosauth
      .get("/users/me")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((e) => {
        navigate("/login");
      });
  };

  const setThemeFirst = () => {
    let theme = localStorage.getItem("theme");
    if (theme === undefined || theme === null) {
      localStorage.setItem("theme", "light");
    }
    // check after
    theme = setTheme(localStorage.getItem("theme"));
  };
  useEffect(() => {
    getUser();
    setThemeFirst();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
export { AuthContextProvider };
export default AuthContext;
