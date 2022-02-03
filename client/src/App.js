import "./css/App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import Signup from "./components/forms/Signup";
import Login from "./components/forms/Login";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/footer/footer.";
import LottieIssue from "./components/404/LottieIssue";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/issue">
          <LottieIssue />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
