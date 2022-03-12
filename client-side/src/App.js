import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "./components/Accounts/CreateAccount";
import LogIn from "./components/Accounts/LogIn";
import Home from "./components/Pages/Home";
import "./index.css";
import ErrorPage from "./components/Pages/ErrorPage";
import UsersHomepage from "./components/Pages/UsersHomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import Restricted from "./components/Pages/Restricted";

function App() {
  return (
    <Router className="App">
      <Routes className="mainDiv">
        <Route path="/" element={<Home />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/usershomepage"
          element={<ProtectedRoute component={UsersHomepage} />}
        />
        <Route path="/restricted" element={<Restricted />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
