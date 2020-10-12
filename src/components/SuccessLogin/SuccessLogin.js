import React from "react";
import "./SuccessLogin.css";
import logo from "../../assets/applauzLogo.svg";

//redirected page after login is succesful
const SuccessLogin = ({ successMessage }) => {
  return (
    <div>
      <img src={logo} alt="no work" className="imgLogo" />

      <p className="font">{successMessage}</p>
    </div>
  );
};

export default SuccessLogin;
