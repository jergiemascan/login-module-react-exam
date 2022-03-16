import React, { useState } from "react";
import Axios from "axios";
import "../../index.css";
import { Link, useNavigate } from "react-router-dom";

const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState({
    isError: false,
    message: "",
  });
  let history = useNavigate();

  const logInSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post("/auth/signin", {
        email: email,
        password: password,
      });
      console.log(response);
      if (response?.data?.status === "success") {
        localStorage.setItem("isAuthenticated", response.data.token);
        setTimeout(() => {
          history("/usershomepage");
        }, 1000);
      }
    } catch (err) {
      console.log(err);
      setLoginStatus({
        isError: true,
        message: err.response.data.message,
      });
    }
  };

  return (
    <main>
      <div className="main-div">
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
        </nav>
        <form className="form" onSubmit={logInSubmitHandler}>
          <h2>Sign in</h2>
          <div className="form-row">
            <label className="form-label" htmlFor="e-mail">
              Email
            </label>
            <input
              className="form-input"
              id="e-mail"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            {loginStatus.isError && (
              <div>
                <strong style={{ color: "red" }}>{loginStatus.message}</strong>
              </div>
            )}
          </div>
          <div className="form-row">
            <button className="btn btn-block" type="submit">
              Log in
            </button>
          </div>
          <div className="member">
            <p>Not a member?</p>
            <p>
              <Link className="links" to="/createaccount">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};
export default LogIn;
