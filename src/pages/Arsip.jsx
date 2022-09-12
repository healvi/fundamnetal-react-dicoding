import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useGetNoteAchived from "../hooks/useGetNoteAchived";

const Arsip = () => {
  const { isLoading, note } = useGetNoteAchived();
  const [data, setData] = useState([]);
  const [query, setquery] = useState("");

  useEffect(() => {
    if (query.length) {
      const searchdata = data.filter((element) =>
        element.title.toLowerCase().includes(query.toLowerCase())
      );
      setData(searchdata);
    } else {
      if (!isLoading) {
        setData(note);
      }
    }
  }, [query, isLoading, note, data]);
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
              {!isLoading ? (
                data.length ? (
                  data.map((v, i) => <Card key={i} data={v} />)
                ) : (
                  <div>Tidak Ada Data</div>
                )
              ) : (
                <div>Loading</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arsip;
