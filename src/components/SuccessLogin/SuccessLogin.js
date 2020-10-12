import React from "react";
import "./SuccessLogin.css";
import logo from "../../assets/applauzLogo.svg";

const SuccessLogin = () => {
  return (
    <div>
      <img src={logo} alt="no work" className="imgLogo" />

      <p className="font">Hello you made it!</p>
    </div>
  );
};

export default SuccessLogin;
