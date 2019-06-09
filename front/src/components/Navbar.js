import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import guestLinks from './navBarComponents/guestLinks'
import createLinks from './navBarComponents/createLinks'

import { logoutUser } from '../actions/authentication';
import { resetState } from '../actions/resetState';
import { fetchAllCountries } from '../actions/fetchStaff/fetchAllCountries'
import { fetchCountriesByRole } from '../actions/fetchStaff/fetchCountriesByRole'
import { fetchOrganizations } from '../actions/fetchStaff/fetchOrganizations'

class Navbar extends Component {
    constructor() {
        super()
        this.onLogout = this.onLogout.bind(this)
    }

    onLogout(e) {
        e.preventDefault();
        this.props.resetState()
        this.props.logoutUser(this.props.history);

        // After logout
        const options = {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        
        // Fetch common data
        this.props.fetchAllCountries(options)
        this.props.fetchOrganizations(options)
    }

    componentDidMount() {
        const {isAuthenticated, user} = this.props.auth
        
        const options = {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        }

        this.props.fetchCountriesByRole(options, isAuthenticated, user)
        this.props.fetchOrganizations(options)
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const initailTaskList = [
            {title:'Vendor registration', route:'/venRegistration'},
            {title:'Scratch card desk', route:'/venScratchCards'},
            {title:'Hotline', route:'/hotline'},
            {title:'Inspection', route:'/inspection'},
            {title:'Report', route:'/report'},
        ]
        const authLinks = createLinks(user, initailTaskList, this.onLogout)
        
        return(
            <header>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "white"}}>
                    <Link className="navbar-brand" to="/">
                        <img src="/img/logo.png" className="logo" alt="HSFI" height="30px" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar1">
                            {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        auth: state.auth
    })
}

export default connect(mapStateToProps, {
    logoutUser,
    resetState,
    fetchAllCountries,
    fetchCountriesByRole,
    fetchOrganizations
})(withRouter(Navbar))