import React from "react";
import { Form } from "react-bootstrap";

export const TextField = ({ label, value, setValue, type }) => {
  return (
    <div>
      <Form.Control htmlFor="value">{label}</Form.Control>
      <input
        type={type}
        id="value"
        name="value"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="form-control"
        required
      />
    </div>
  );
};
