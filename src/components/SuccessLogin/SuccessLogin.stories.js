import React from "react";
import SuccessLogin from "./SuccessLogin";
import PropTypes from "prop-types";

export default {
  component: SuccessLogin,
  title: "Auth success",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};

SuccessLogin.PropTypes = {
  successMessage: PropTypes.string,
};

const Template = (args) => <SuccessLogin {...args} />;

export const success = Template.bind({});
success.args = {
  successMessage: "Hello, you made it!",
};
