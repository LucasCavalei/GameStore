import "./App.css";
import React from "react";
import Home from "./pages/home/Home";
import Signup from "./pages/forms/Signup";
import Header from "./components/header/Header";
import Login from "./pages/forms/Login";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/footer/footer.";
import LottieIssue from "./pages/404/LottieIssue";

function App() {
  return (
    <Router>
      <Header />
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
