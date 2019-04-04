import React, { useEffect } from "react";
import { userLogin, userChecking } from "./hooks";
import Form from "./Form";

const Login = () => {
  const labels = { login_title: "员工点餐系统" }; //!fake data
  useEffect(() => {
    userChecking();
  }, []);
  return (
    <div className="component-login">
      <div className="header">{labels.login_title}</div>
      <Form onSubmit={onSubmit} />
    </div>
  );
};

const onSubmit = formValues => {
  userLogin(formValues);
};

export default Login;
