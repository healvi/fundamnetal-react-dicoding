import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillSaveFill } from "react-icons/bs";
import { showFormattedDate } from "../utils";
import { useNavigate, useParams } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/local-data";
const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const achivedData = () => {
    archiveNote(id);
    navigate("/");
  };
  const unAchivedData = () => {
    unarchiveNote(id);
    navigate("/");
  };
  const deleteData = () => {
    deleteNote(id);
    navigate("/");
  };
  useEffect(() => {
    setData(getNote(id));
  }, [id]);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <h1 className="m-0">{data.title}</h1>
          <h6>{showFormattedDate(data.createdAt)}</h6>
          <p>{data.body}</p>
        </div>
      </div>
      <div className="icons-container col-1 me-3 mb-3 p-1 row">
        <div className="icon mr-3 col-6">
          {data.archived ? (
            <BsFillSaveFill
              transform="rotate(180)"
              fill="lightgreen"
              size={40}
              onClick={() => unAchivedData()}
            />
          ) : (
            <BsFillSaveFill
              fill="blue"
              size={40}
              onClick={() => achivedData()}
            />
          )}
        </div>
        <div className="icon mr-3 col-6">
          <BsFillTrashFill fill="red" size={40} onClick={() => deleteData()} />
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {};

export default Details;
