import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="container p-5">
      <h3>Welcome to the Farmer's Market </h3>
      <h5>To access the site, please create a new account or sign in to an existing account.</h5>
      <Link to="/signup" class="btn btn-primary m-3">
        Sign Up
      </Link>
      <Link to="/login" class="btn btn-primary m-3">
        Log In
      </Link>
    </div>
  );
};
