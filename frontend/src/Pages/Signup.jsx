import { useState } from "react";
import { TextField } from "../Common/TextField";
export const Signup = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <h1>Signup</h1>
      <TextField
        label="Username"
        value={userName}
        setValue={setUserName}
        type="text"
      />
      <TextField
        label="Password"
        value={password}
        setValue={setPassword}
        type="password"
      />
    </div>
  );
};
