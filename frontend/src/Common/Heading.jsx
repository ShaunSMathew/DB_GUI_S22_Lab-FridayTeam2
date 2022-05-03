import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Heading = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const whenLoggingOut = () => {
    console.log("loggingout");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("user_type");
    props.setToken(null);

    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    setIsLoggedIn(props.token);
    setUsername(props.username);
  }, [props.token]);

  const testing = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header>
      <div className="bg-dark d-flex flex-row justify-content-end align-items-end pb-2 ps-4 pe-2 m-auto">
        <Link to="/" class="me-auto">
          {/* <img id="logo" src="CornLogo.png"></img> */}
        </Link>
        <h1 class="me-auto text-white">
          <Link to="/" style={{ textDecoration: "none" }}>
            Farmers Market
          </Link>
        </h1>
        {!isLoggedIn && (
          <Link to="/signup" class="btn btn-outline-primary mx-2">
            Sign Up
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/login" class="btn btn-outline-primary ms-2">
            Log in
          </Link>
        )}
        {isLoggedIn && (
          <Link to={`/${username}/profile`} class="btn btn-outline-info ms-2">
            Your Profile
          </Link>
        )}
        {isLoggedIn && (
          <button type="button" id="logoutButton" onClick={whenLoggingOut} className="btn btn-outline-warning ms-2">
            Log Out
          </button>
        )}
      </div>
    </header>
  );
};
