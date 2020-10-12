import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import LoginForm from "./sections/LoginContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SuccessLogin from "./components/SuccessLogin/SuccessLogin";

// handleForgotPw,
// handleCreateNewUser,
// onChangeEmail,
// onChangePassword,
// handleSubmit,

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LoginForm} />

          <Route
            path="/login"
            render={(props) => (
              <SuccessLogin {...props} successMessage="Hello, you made it!" />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
