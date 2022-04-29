import React, { useState } from "react";
import { User } from "../Common";
import { ApiMain } from "../Common";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user_type, setUserType] = useState("");
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();
  const api = new ApiMain();

 const handleSubmit = (e) => {
   const form = e.currentTarget;
   e.preventDefault();
   if (form.checkValidity() === false) {
     e.stopPropagation();
     setValidated(true);
   } else {
     let newUser = new User(username, password);
     api
       .login(newUser)
       .then((res) => {
         //  props.setToken(res.data.data.jwt);
         //  localStorage.setItem("token", res.data.data.jwt);
         console.log(res);
         navigate("/");
         console.log("logged in");
       })
       .catch((err) => {
         console.log(err);
         alert(err);
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
      <h1 class="">Log In</h1>

      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter a Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <Form.Control.Feedback type="invalid"> Please enter a username.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <Form.Control.Feedback type="invalid"> Please enter a password.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="user_type">
          <Form.Label>User Type</Form.Label>
          <Form.Select aria-label="Default select example" onChange={(e) => setUserType(e.target.value)} required>
            <option></option>
            <option value="farmer">Farmer</option>
            <option value="owner">Restraunt Owner</option>
          </Form.Select>
        </Form.Group>
        <div className="container p-3">
          <Link to="/" class="btn btn-outline-danger me-3">
            Cancel
          </Link>
          <Button variant="success" id="signupButton" type="submit">
            Log Back In
          </Button>
        </div>
      </Form>
    </div>
  );
};
