import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="not-found">
      <h1>Page not found</h1>
      <Link className="links" to="/">
        To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
