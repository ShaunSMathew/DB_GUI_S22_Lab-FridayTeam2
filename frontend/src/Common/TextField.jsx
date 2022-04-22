import React from "react";
export const TextField = ({ label, value, setValue, type }) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor="value">{label}</label>
      <input
        type={type}
        id="value"
        name="value"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="form-control"
      />
    </div>
  );
};
