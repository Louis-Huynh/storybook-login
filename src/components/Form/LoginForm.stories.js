import React from "react";
import LoginForm from "./LoginForm";

export default {
  component: LoginForm,
  title: "Form",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};

const Template = (args) => <LoginForm {...args} />;

export const Login = Template.bind({});
Login.args = {};
