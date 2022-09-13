import { createContext, useEffect, useMemo, useState } from "react";
import { axiosauth } from "../utils/axios";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
const AuthContextProvider = (props) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const [locale, setLocale] = useState("");
  const [theme, setTheme] = useState("");

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      let newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      let newTheme = prevTheme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
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

  const setDefaultFirst = () => {
    let theme = localStorage.getItem("theme");
    let locale = localStorage.getItem("locale");
    if (theme === undefined || theme === null) {
      localStorage.setItem("theme", "light");
    }
    if (locale === undefined || locale === null) {
      localStorage.setItem("locale", "id");
    }
    // check after
    theme = setTheme(localStorage.getItem("theme"));
    locale = setLocale(localStorage.getItem("locale"));
    document.documentElement.setAttribute("data-theme", theme);
  };
  useEffect(() => {
    getUser();
    setDefaultFirst();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
export { AuthContextProvider };
export default AuthContext;
