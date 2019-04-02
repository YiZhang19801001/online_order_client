import React, { useState } from "react";
import { FormInput } from "../shared";

const Form = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({ phone: "", password: "" });

  const formFields = [
    {
      name: "phone",
      label: "phone",
      type: "text",
      placeholder: "enter your phone no."
    },
    {
      name: "password",
      label: "password",
      type: "password",
      placeholder: "enter your password"
    }
  ];

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(formValues);
      }}
    >
      {formFields.map(formField => {
        return (
          <FormInput
            key={`formInput${formField.name}`}
            formField={formField}
            setFormValues={setFormValues}
            formValues={formValues}
          />
        );
      })}
      <button>submit</button>
    </form>
  );
};

export default Form;
