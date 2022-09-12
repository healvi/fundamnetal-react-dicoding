import { useEffect, useState } from "react";

const useForms = () => {
  const [isLoading, setLoading] = useState(false);
  const [forms, setForms] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [passvisible, setVisible] = useState(false);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForms({
      ...forms,
      [name]: value,
    });
  };

  useEffect(() => {}, [passvisible, forms]);

  return { passvisible, forms, setVisible, handleInput, isLoading, setLoading };
};

export default useForms;
