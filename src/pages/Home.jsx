import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { getActiveNotes } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import { CreatePath } from "../utils/constant";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [query, setquery] = useState("");

  useEffect(() => {
    setData(getActiveNotes());
  }, []);
  useEffect(() => {
    if (query.length) {
      const searchdata = data.filter((element) =>
        element.title.toLowerCase().includes(query.toLowerCase())
      );
      setData(searchdata);
    } else {
      setData(getActiveNotes());
    }
  }, [query]);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 px-0 p-4">
          <div className="container">
            <div className="row mx-0 ">
              <div className="col-10 ">
                <div className="input-group mb-3">
                  <input
                    onChange={(e) => setquery(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Cari Bedasarkan Judul"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                </div>
              </div>
              {data.length ? (
                data.map((v, i) => <Card key={i} data={v} />)
              ) : (
                <div>Tidak Ada Data</div>
              )}
            </div>
            <div className="icons-container col-1 me-3 mb-3">
              <div className="icon">
                <BsFillPlusCircleFill
                  fill="green"
                  onClick={() => navigate(CreatePath)}
                  size={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
