import React from "react";
import { Form } from "react-bootstrap";

export const SelectUserType = ({ label, value, setValue }) => {
  const options = [
    {
      label: "Farmer",
      value: "farmer",
    },
    {
      label: "Restraunt Owner",
      value: "owner",
    },
  ];
  return (
    <div>
      <Form.Label for="value">{label}</Form.Label>
      <Form.Select name="value" id="value" value={value} onChange={(event) => setValue(event.target.value)} required>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </Form.Select>
    </div>
  );
};
