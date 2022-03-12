import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div className="home">
      <div className="main-div">
        <header>
          <h1>Explore the world with Amazing Adventure</h1>
        </header>

        <p className="about">
          Learn more about our Amazing Adventures by logging in and see the most
          popular tours and destinations. Maxime mollitia, molestiae quas vel
          sint commodi repudiandae consequuntur voluptatum laborum numquam
          blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio.
        </p>

        <main className="main">
          <button className="btn">
            <Link className="linkar" to="/createaccount">
              Register
            </Link>
          </button>

          <button className="btn">
            <Link className="linkar" to="/login">
              Sign in
            </Link>
          </button>
        </main>
      </div>
    </div>
  );
};
export default Home;
