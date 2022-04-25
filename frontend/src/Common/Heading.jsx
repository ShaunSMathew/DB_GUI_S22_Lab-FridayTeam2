import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export const Heading = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const whenLoggingOut = () => {
    console.log("loggingout");
    localStorage.removeItem("token");
    props.setToken(null);

    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    setIsLoggedIn(props.token);
  }, [props.token]);

  const pr = () => {
    setIsLoggedIn(true);
  };

  return (
    <header>
      <div className="bg-dark d-flex flex-row justify-content-end align-items-end pb-2 ps-4 pe-2 m-auto">
        <button onClick={pr}>login</button>
        <Link to="/" class="me-auto">
          {/* <img
            id="logo"
            src="https://nc.myusernamesthis.net/apps/files_sharing/publicpreview/88TM4cbGbfbRCMD?x=1848&y=630&a=true&file=logo-1.png"></img> */}
        </Link>
        <h1 class="me-auto text-white">Farmers Market</h1>
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
          <Link to="" class="btn btn-outline-info ms-2">
            My Account
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
