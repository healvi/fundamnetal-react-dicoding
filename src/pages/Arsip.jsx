import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getArchivedNotes } from "../utils/local-data";

const Arsip = () => {
  const [data, setData] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [query, setquery] = useState("");

  const searchData = (params) => {
    setquery(params);
    if (data && !isSearch) {
      setData(getArchivedNotes());
    } else if (isSearch) {
      const searchdata = data.filter((element) =>
        element.title.toLowerCase().includes(params.toLowerCase())
      );
      setData(searchdata);
    }
  };
  useEffect(() => {
    setData(getArchivedNotes());
  }, [isSearch]);
  useEffect(() => {
    if (query.length) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, [data, query]);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 px-0 p-4">
          <div className="container">
            <div className="row mx-0 ">
              <div className="col-10 ">
                <div className="input-group mb-3">
                  <input
                    onChange={(e) => searchData(e.target.value)}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arsip;
