import React, { useState } from "react";
import LoginForm from "../components/Form/LoginForm";
import "./LoginContainer.css";
import logo from "../assets/applauzLogo.svg";

//title, subtitle and form
const LoginContainer = () => {
  return (
    <div className="LoginWrapper">
      <img src={logo} alt="logo fails to load" className="imgLogo" />
      <p className="subTitle">Login</p>

      <LoginForm />
    </div>
  );
};

export default LoginContainer;
