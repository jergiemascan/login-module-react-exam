import React from "react";
import { Link } from "react-router-dom";

const Restricted = () => {
  return (
    <div className="main-div">
      <nav>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/login">
          Log in
        </Link>
      </nav>
      <main className="main">
        <h3>You have log in to see this page!</h3>
      </main>
    </div>
  );
};

export default Restricted;
