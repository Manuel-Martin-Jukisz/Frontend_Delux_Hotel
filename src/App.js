import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup.js';
import Error from './components/Error';



function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch >
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route component={Error}/>
          </Switch>
      </Router>
    </div>
  );
} 

export default App;
