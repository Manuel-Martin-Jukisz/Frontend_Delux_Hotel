import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import {validateToken} from './API';

import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup';
import MyAccount from './components/MyAccount';
import UpdateDetails from './components/UpdateDetails'
import MyReservations from './components/MyReservations'
import Error from './components/Error';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';

function App() {

  const defaultUser = {
    id: 0,
    name: "",
    username: "",
    email: "",
  }
  const [user, setUser] = useState(defaultUser)

    useEffect(() => {
      if (localStorage.getItem('jwt')) 
      validateToken().then(user => handlePostAuth(user))
    }, [])


    const handlePostAuth = (userInfo) => {
      if (userInfo.error) {
        alert(userInfo.error)
      } else {
        setUser(userInfo.user)

        if (userInfo.jwt) {
          localStorage.setItem('jwt', userInfo.jwt)
        }
      } 
    }

    const logOut = () => {
      localStorage.removeItem("jwt");
      setUser(defaultUser)
    }
    
  return (
    <div className="App">
      <Router>
        <Nav logOut={logOut}/>
        <Switch >
          <Route exact path="/">
            <Home
            user={user}
            />
          </Route>
          <Route exact path="/myAccount">
            <MyAccount
            user={user}
            />
          </Route>
          <Route exact path="/updateDetails">
            <UpdateDetails
            user={user}
            setUser={setUser}
            />
          </Route>
          <Route exact path="/login">
            <Login
            user={user}
            setUser={setUser}
            />
          </Route>
          <Route exact path="/myReservations">
            <MyReservations
            user={user}
            />
            </Route>
          <Route path='/signup' component={Signup}/>
          <Route component={Error}/>
          </Switch>
      </Router>
    </div>
  );
} 

export default App;
