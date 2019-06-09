import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Redirect} from 'react-router-dom'

import UnAuthHome from './UnAuthHome';

class Home extends Component {
    render() {
        const {isAuthenticated} = this.props.auth
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