import React, { useEffect, useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { axioscall } from "../../utils/axios";
import { saveAuthSession } from "../../utils/Session";
const Login = () => {
  const navigate = useNavigate();
  const [forms, setForms] = useState({
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
    } else if (forms.email.length && forms.password.length >= 6) {
      await axioscall
        .post("/login", forms)
        .then((v) => {
          alert(v.data.message);
          saveAuthSession(v.data.data);
          navigate("/");
        })
        .catch((e) => {
          return alert("Register Tidak Berhasil");
        });
    } else {
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
          <div class="border-5 rounded-3 border border-primary p-3">
            <div class="card-body w-full">
              <h3>LOGIN</h3>
              <form onSubmit={handleForm}>
                <div class="mb-3">
                  <label for="emails" class="form-label">
                    Email address
                  </label>
                  <input
                    onChange={(e) => handleInput(e)}
                    type="email"
                    name="email"
                    class="form-control"
                    id="emails"
                    placeholder="email"
                    aria-label="email"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="mainpassword" class="form-label">
                    Password
                  </label>

                  <div class="input-group flex-nowrap">
                    <input
                      onChange={(e) => handleInput(e)}
                      type={passvisible ? "text" : "password"}
                      name="password"
                      class="form-control"
                      id="mainpassword"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                    <span
                      class="input-group-text"
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
                </div>

                <button type="submit" class="btn btn-primary mx-2">
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  type="buttom"
                  class="btn btn-danger mx-2"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;