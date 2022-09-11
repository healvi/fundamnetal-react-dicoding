import React, { useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
const Create = () => {
  const navigate = useNavigate();
  const [forms, setForms] = useState({
    title: "",
    body: "",
  });
  const inputHandler = (e) => {
    const value = e.target.innerHTML;
    const name = e.target.getAttribute("name");
    setForms({
      ...forms,
      [name]: value,
    });
  };
  const createHandler = () => {
    addNote(forms);
    navigate("/");
  };
  useEffect(() => {}, [forms]);
  return (
    <div className="container pt-5">
      <div
        data-placeholder="Tulis Judul"
        contentEditable
        className="add-new-page-input-title"
        name="title"
        onInput={(e) => inputHandler(e)}
      />
      <div
        data-placeholder="Tulis Catatan"
        contentEditable
        className="add-new-page-input-body"
        name="body"
        onInput={(e) => inputHandler(e)}
      />
      <div className="icons-container col-1 me-3 mb-3">
        <div className="icon">
          <BsFillCheckCircleFill
            fill="green"
            onClick={() => createHandler()}
            size={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Create;
