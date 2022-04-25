import React from "react";
import { Form } from "react-bootstrap";

export const TextField = ({ label, value, setValue, type }) => {
  return (
    <div>
      <Form.Label for="value">{label}</Form.Label>
      <Form.Control
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
