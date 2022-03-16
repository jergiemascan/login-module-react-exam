import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
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
          <p className="learn-more">
            <Link className="linkar learn-more" to="/usershomepage">
              Learn more &#8594;
            </Link>
          </p>
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
    </section>
  );
};
export default Home;
