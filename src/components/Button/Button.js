import React from "react";
import "./Button.css";

export default function Button({
  label,
  handleForgotPw,
  handleCreateNewUser,
  typeClassName,
  buttonType,
  handleClick,
}) {
  return (
    <div>
      <button type={buttonType} className={typeClassName} onClick={handleClick}>
        {label}
      </button>
    </div>
  );
}
