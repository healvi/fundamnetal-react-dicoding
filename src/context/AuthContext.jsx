import { createContext, useEffect, useMemo, useState } from "react";
import { deleteAuthSession } from "../utils/Session";
import { axiosauth } from "../utils/axios";
const AuthContext = createContext();
const AuthContextProvider = (props) => {
  const [users, setUsers] = useState({});
  const [locale, setLocale] = useState("id");
  const [theme, setTheme] = useState("light");

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
        console.log("user data");
        setUsers(response.data);
      })
      .catch((e) => {
        deleteAuthSession();
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
export { AuthContextProvider };
export default AuthContext;
