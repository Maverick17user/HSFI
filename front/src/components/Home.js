import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Redirect, Switch, Route } from 'react-router-dom'

// import AuthHome from './components/AuthHome'
import UnAuthHome from './UnAuthHome';

class Home extends Component {

    render() {

        const {isAuthenticated, user} = this.props.auth

        // TODO: Operator home without redirect
        // let toAuthHome = (user.role === 'operator') ? null:

        return isAuthenticated ? (
            <Redirect to="/redactPanel"/>
            ) : (
             <UnAuthHome/>
            ) 
    }

}

Home.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(withRouter(Home))