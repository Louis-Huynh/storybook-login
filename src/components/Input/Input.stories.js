import React from "react";
import Input from "./Input";

export default {
  component: Input,
  title: "Input",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};

const Template = (args) => <Input {...args} />;

export const Email = Template.bind({});
Email.args = {
  value: "input email",
  typeClassName: "inputLogCSS",
  display: "Enter Email",
};

export const Password = Template.bind({});
Password.args = {
  value: "input placeholder",
  typeClassName: "inputLogCSS",
  display: "Enter Password",
};
