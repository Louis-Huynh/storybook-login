import React from "react";
import Input from "./Input";
import PropTypes from "prop-types";

export default {
  component: Input,
  title: "Input",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};

Input.PropTypes = {
  value: PropTypes.string,
  typeClassName: PropTypes.string,
  display: PropTypes.string,
};

const Template = (args) => <Input {...args} />;

export const Email = Template.bind({});
Email.args = {
  value: "email placeholder",
  typeClassName: "inputLogCSS",
  display: "Enter Email",
};

export const Password = Template.bind({});
Password.args = {
  value: "password placeholder",
  typeClassName: "inputLogCSS",
  display: "Enter Password",
};
