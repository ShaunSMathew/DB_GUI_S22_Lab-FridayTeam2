import React, { useState } from "react";
import { TextField, SelectUserType } from "../Common";
import { ApiMain } from "../Common";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [validated, setValidated] = useState(false);

  return (
    <div className="container form-group">
      <h1 class="text-white bg-primary">Log In</h1>

      <Form noValidate validated={validated}>
        <TextField label="Username" value={username} setValue={setUsername} type="text" />
        <TextField label="Password" value={password} setValue={setPassword} type="password" />
        <SelectUserType label="Select User Type" value={userType} setValue={setUserType} />
        <Link to="/" class="btn btn-danger me-3">
          Cancel
        </Link>
        <button class="btn btn-success" id="signupButton" type="submit" form="signup-form">
          Log Back In
        </button>
      </Form>
    </div>
  );
};
