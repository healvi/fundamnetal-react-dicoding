import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import { useNavigate } from "react-router-dom";
const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="col-12 col-md-3 m-2">
      <div className="card">
        <div className="card-body">
          <h5
            className="card-title"
            onClick={() => navigate(`/details/${data.id}`)}
          >
            {data.title}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {showFormattedDate(data.createdAt)}
          </h6>
          <p className="card-text">{data.body}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
