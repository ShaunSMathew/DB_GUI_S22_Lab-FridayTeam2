import React, { useEffect, useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";
export const LandingPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="container">
      <h1>Farmer's Market</h1>
      <h5>
        Welcome to the Farmer's Market, a place where farmers can easily sell
        goods to the restraunts that need them.
      </h5>
      <p>
        To access the site, please create a new account or sign in to an
        existing account.
      </p>
    </div>
  );
};
