import React from "react";

const FormInput = ({ formField, setFormValues, formValues }) => {
  const { type, label, placeholder, name } = formField;
  return (
    <div className="form-field">
      <label>
        <span>{label}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={formValues[name]}
          onChange={e => {
            setFormValues({ ...formValues, [name]: e.target.value });
          }}
        />
      </label>
    </div>
  );
};

export default FormInput;
