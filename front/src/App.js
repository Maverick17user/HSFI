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

import VenRegForm from './components/venReg/VenRegForm'
import ScratchCardDesk from './components/scratchCard/ScratchCardDesk'
import HotlineForm from './components/hotline/HotlineForm'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthHome from './components/authHome/AuthHome'

import { putCountriesIntoStore } from './actions/countries/putCountriesIntoStore'

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
    render() {
      return (
        <Provider store={ store }>
          <Router >
            <div>
              <Navbar history={this.props.history}/>
              <div className="container">
                <Switch>
                  <Route exact path="/" render={() => <Home />}/>
                  <Route exact path="/registerManager" component={RegisterManager} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/registerOperator" component={RegisterOperator} />
                  <Route exact path="/loginManager" component={LoginManager} />
                  <Route exact path="/loginOperator" component={LoginOperator} />
                  <Route exact path="/login" component={LogIn} />
  
                  <Route path="/redactPanel" component={AuthHome} />
                  <Route path="/venRegistration" component={VenRegForm}/>
                  <Route path="/venScratchCards" component={ScratchCardDesk}/>
                  <Route path="/hotline" component={HotlineForm}/>
                  <Route path="/inspection" render={() => <p>inspection</p>}/>
                  <Route path="/report" render={() => <p>report</p>}/>
                </Switch>
              </div>
            </div>
          </Router>
        </Provider> 
      );
    }
}

export default App

