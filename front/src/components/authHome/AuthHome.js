import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RoleHomeComponent from './RoleHomeComponent'

class AuthHome extends Component {
    render() {
        const {user} = this.props.auth;

        return (
            <RoleHomeComponent userRole={user.role} location={this.props.location}/>
        )
    }
}

AuthHome.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(withRouter(AuthHome));