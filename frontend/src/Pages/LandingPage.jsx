import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const LandingPage = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(props.token);
  }, [props.token]);

  if (!isLoggedIn) {
    return (
      <div className="container p-5 d-flex">
        <h3>Welcome to the Farmer's Market!</h3>
        <h4></h4>
        <div>
        <h5>To access the site, please create a new account or sign in to an existing account.</h5>
        <Link to="/signup" class="btn btn-primary m-3">
          Sign Up
        </Link>
        <Link to="/login" class="btn btn-primary m-3">
          Log In
          </Link>
          </div>
      </div>
    );
  } else if (isLoggedIn && props.user_type == "farmer") {
    return (
      <div className="container p-5">
        <h3>Welcome {props.username}</h3>
        <h5>Farmer</h5>
      </div>
    );
  } else {
    return (
      <div className="container p-5">
        <h3>Welcome {props.username}</h3>
        <h5>Restraunt Owner</h5>
      </div>
    );
  }
};
