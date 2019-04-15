// import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import store from './store';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import RegisterOperator from './components/RegisterOperator';
import RegisterManager from './components/RegisterManager';

import LogIn from './components/LogIn';
import LoginOperator from './components/LoginOperator';
import LoginManager from './components/LoginManager';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthHome from './components/AuthHome'
if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/'
  }
}

const App = ({history}) => {
    return (
      <Provider store={ store }>
        <Router history={history}>
          <div>
            <Navbar/>
            <div className="container">
              <Switch>
                {/* <Route exact path="/" component={Home} /> */}
                <Route exact path="/" render={() => (
                  <Home />
                )}/>
                <Route exact path="/registerManager" component={RegisterManager} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/registerOperator" component={RegisterOperator} />
                <Route exact path="/loginManager" component={LoginManager} />
                <Route exact path="/loginOperator" component={LoginOperator} />
                <Route exact path="/login" component={LogIn} />
                <Route path="/redactPanel" component={AuthHome} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
}

export default App;
