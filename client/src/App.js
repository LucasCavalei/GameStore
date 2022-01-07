import './css/App.css';
import React,{useState} from 'react';
import Home from './components/Home';
import Signup from './components/forms/Signup';
import Login from './components/forms/Login';
import { Switch,  BrowserRouter as Router ,Route } from 'react-router-dom';


function App() {

  return (
    <div>
    <Router>
    <Switch>
         <Route exact path="/"> <Home /></Route >
          <Route exact path="/signup"> <Signup /></Route >
          <Route exact path="/login"> <Login /></Route >

      </Switch>
     </Router>
     </div>
);
}

export default App;
