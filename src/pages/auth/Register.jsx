import React, { useEffect, useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { axioscall } from "../../utils/axios";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [forms, setForms] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [passvisible, setVisible] = useState(false);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForms({
      ...forms,
      [name]: value,
    });
  };
  const handleForm = async (e) => {
    e.preventDefault();
    if (forms.password.length < 6) {
      return alert("Passsowrd Anda kurang Dari 6 huruf");
    } else if (
      forms.name.length &&
      forms.password.length >= 6 &&
      forms.name.length
    ) {
      await axioscall
        .post("/register", forms)
        .then((v) => {
          alert(v.message);
          navigate("/login");
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
          return alert("Register Tidak Berhasil");
        });
    } else {
      setLoading(false);
      return alert("Periksa FOrm Anda kurang Benar");
    }
  };
  useEffect(() => {
    console.log(forms);
  }, [passvisible, forms]);
  return (
    <div className="container full-container">
      <div className="row justify-content-center align-items-center full-container">
        <div className="col-12 col-md-6">
          <div className="border-5 rounded-3 border border-primary p-3">
            <div className="card-body w-full">
              <h3>REGISTER</h3>
              <form onSubmit={handleForm}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    required
                    onChange={(e) => handleInput(e)}
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="name"
                    aria-label="name"
                    aria-describedby="nameHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emails" className="form-label">
                    Email address
                  </label>
                  <input
                    required
                    onChange={(e) => handleInput(e)}
                    type="email"
                    name="email"
                    className="form-control"
                    id="emails"
                    placeholder="email"
                    aria-label="email"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="mainpassword" className="form-label">
                    Password
                  </label>

                  <div className="input-group flex-nowrap has-validation">
                    <input
                      required
                      onChange={(e) => handleInput(e)}
                      type={passvisible ? "text" : "password"}
                      name="password"
                      className="form-control"
                      id="mainpassword"
                      placeholder="password"
                      aria-label="password"
                      aria-describedby="addon-wrapping"
                    />
                    <span
                      className="input-group-text"
                      id="addon-wrapping"
                      onClick={() => setVisible(!passvisible)}
                    >
                      {passvisible ? (
                        <BsFillEyeSlashFill size={15} />
                      ) : (
                        <BsFillEyeFill size={15} />
                      )}
                    </span>
                  </div>
                  <div id="emailHelp" className="form-text">
                    Minimum 6 charaters
                  </div>
                </div>

                <button type="buttom" className="btn btn-danger mx-2">
                  {isLoading ? "Loading" : "   Register"}
                </button>
                <button
                  onClick={() => navigate("/login")}
                  type="submit"
                  className="btn btn-primary mx-2"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
