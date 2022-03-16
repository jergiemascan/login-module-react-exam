import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { validation } from "./RegValidation";

export const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const CreateAccount = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState();
  let navigate = useNavigate();

  const inputHandler = (key) => (e) => {
    if (e.target.value.length > 0) {
      setError({ ...error, [key]: "" });
      setValues({ ...values, [key]: e.target.value });
    }
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const errorMessage = validation(values);

    if (Object.keys(errorMessage).length > 0) {
      setError(errorMessage);
    } else {
      try {
        const response = await Axios.post("/auth/signup", {
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        });
        if (response?.data?.status === "success") {
          localStorage.setItem("isAuthenticated", response.data.token);
          setTimeout(() => {
            navigate("/usershomepage");
          }, 2000);
        }
        setError("");
      } catch (err) {
        let errorMessage = {};
        errorMessage = {
          ...errorMessage,
          email: "Email is already registered",
        };
        setError({ ...errorMessage });
      }
    }
  };

  return (
    <main>
      <div>
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
        </nav>
        <form className="form" onSubmit={submitFormHandler}>
          <h2>Register Account</h2>
          <div className="form-row">
            <label className="form-label" htmlFor="firstname">
              Firstname
            </label>
            <input
              className="form-input"
              id="firstname"
              type="text"
              value={values.firstname}
              name="firstName"
              onChange={inputHandler("firstname")}
            ></input>
            <div className="errorMessage">{error && error.firstname}</div>
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="efternamn">
              Lastname
            </label>
            <input
              className="form-input"
              id="efternamn"
              type="text"
              value={values.lastname}
              name="lastName"
              onChange={inputHandler("lastname")}
            ></input>
            <div className="errorMessage">{error && error.lastname}</div>
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              id="email"
              type="email"
              value={values.email}
              name="email"
              onChange={inputHandler("email")}
            ></input>
            <div className="errorMessage">
              <div className="errorMessage">{error && error.email}</div>
            </div>
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="Password">
              Password
            </label>
            <input
              className="form-input"
              id="Password"
              type="password"
              value={values.password}
              name="password"
              onChange={inputHandler("password")}
            ></input>
            <div className="errorMessage">{error && error.password}</div>
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="confirmPw">
              Confirm password
            </label>
            <input
              className="form-input"
              id="confirmPw"
              type="password"
              value={values.confirmPassword}
              name="confirmPassword"
              onChange={inputHandler("confirmPassword")}
            ></input>
            <div className="errorMessage">{error && error.confirmPassword}</div>
          </div>
          <div className="form-row ">
            <button className="btn btn-block" type="submit">
              Submit
            </button>
          </div>
          <div className="member">
            <p>Already a member?</p>
            <p>
              <Link className="links" to="/login">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateAccount;
