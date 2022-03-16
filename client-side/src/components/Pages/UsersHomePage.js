import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Button } from "react-bootstrap";

const UsersHomepage = () => {
  const navigate = useNavigate();
  const signoutHandler = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="adventures">
      <div className="div">
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
          <Button className="link" onClick={signoutHandler}>
            Sign out
          </Button>
        </nav>
        <header className="main-div">
          <h1 className="h1-adventure">
            Welcome to Amazing <br></br>Adventure
          </h1>
        </header>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default UsersHomepage;
