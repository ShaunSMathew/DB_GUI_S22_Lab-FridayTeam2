import React, { useState } from "react";
import { TextField, SelectUserType, User } from "../Common";
import { ApiMain } from "../Common";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user_type, setUserType] = useState("");
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();
  const api = new ApiMain();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      let newUser = new User(username, password);
      newUser["user_type"] = user_type;
      api
        .signup(newUser)
        .then((res) => {
          props.setToken(res.data.data.jwt);
          localStorage.setItem("token", res.data.data.jwt);
          navigate("/");
          console.log(res.data.data.jwt);
        })
        .catch((err) => {
          console.log(err.data.data);
          alert(err.data.data);
        });
    }
  };
  if (props.token) {
    return (
      <div class="w-75 mx-auto">
        <div class="border mb-2 mt-5">
          <h1 class="text-white bg-primary p-3 mb-0">You are already logged in</h1>
          {navigate("/")}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 class="">Sign Up</h1>

      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <Form.Group>
          <TextField label="Username" value={username} setValue={setUsername} type="text" />
          <TextField label="Password" value={password} setValue={setPassword} type="password" />
          <SelectUserType label="Select User Type" value={user_type} setValue={setUserType} />
        </Form.Group>
        <div className="container p-3">
          <Link to="/" class="btn btn-danger me-3">
            Cancel
          </Link>
          <Button class="btn btn-success" id="signupButton" type="submit">
            Create New Account
          </Button>
        </div>
      </Form>
    </div>
  );
};
