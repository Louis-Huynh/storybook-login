import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCred, setErrorCred] = useState(false);
  const [credentialInfo, setCredentialInfo] = useState([
    { email: "curious@george.com", password: "timber" },
    { email: "short@gmail.com", password: "short" },
    { email: "potato@mail.ca", password: "kitkat" },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    credentialInfo.map((data) => {
      console.log("data:", data);
      console.log("email: ", email);
      console.log("password: ", password);
      if (data.password === password && data.email === email) {
        history.push("/login");
      }
    });

    setErrorCred(true);
    setTimeout(() => {
      setErrorCred(false);
    }, 3000);

    setPassword("");
    setEmail("");
  };
  const history = useHistory();

  const onChangePassword = (pw) => {
    setPassword(pw);
  };

  const onChangeEmail = (email) => {
    setEmail(email);
  };

  const handleCreateNewUser = () => {
    console.log("New user!");
  };

  const handleForgotPw = () => {
    console.log("Forgot password");
  };
  return (
    <div className="formWrapper">
      <p className="errorMessage">
        {errorCred ? <>Wrong username or password</> : null}
      </p>

      <form onSubmit={handleSubmit}>
        <div className="formContainer">
          <Input
            onChangeData={onChangeEmail}
            typeClassName="inputLogCSS"
            display="Enter email"
          />
          <Input
            onChangeData={onChangePassword}
            typeClassName="inputLogCSS"
            display="Enter password"
          />
          <Button label="Log In" typeClassName="loginCSS" buttonType="submit" />
          <Button
            label="Forgot Password?"
            typeClassName="forgotCSS"
            buttonType="button"
            handleClick={handleForgotPw}
          />
          <Button
            label="Create an Account"
            typeClassName="createCSS"
            buttonType="button"
            handleClick={handleCreateNewUser}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
