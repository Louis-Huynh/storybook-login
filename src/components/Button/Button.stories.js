import React from "react";
import { action } from "@storybook/react";
import Button, { IsLoading, Buttoner } from "./Button";
import PropTypes from "prop-types";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    handleLogin: { action: "clicked" },
    backgroundColor: { control: "color" },
  },
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleLogin: PropTypes.func,
  handleForgotPw: PropTypes.func,
  handleCreateNewUser: PropTypes.func,
};

const Template = (args) => <Button {...args} />;

export const Submit = Template.bind({});
Submit.args = {
  label: "Login",
  typeClassName: "loginCSS",
  buttonType: "submit",
  handleLogin: () => {
    action("Login");
  },
};

export const Forgot = Template.bind({});
Forgot.args = {
  label: "Forgot Password?",
  typeClassName: "forgotCSS",
  buttonType: "button",
  handleForgotPw: () => {
    action("forgot pw");
  },
};

export const Create = Template.bind({});
Create.args = {
  label: "Create Account",
  typeClassName: "createCSS",
  buttonType: "button",
  handleCreateNewUser: () => {
    action("Create Account");
  },
};
