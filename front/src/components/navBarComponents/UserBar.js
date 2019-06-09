import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchVendorsByRole } from '../../actions/fetchStaff/fetchVendorsByRole'
import { fetchCountriesByRole } from '../../actions/fetchStaff/fetchCountriesByRole'
import { fetchFoodGroups } from '../../actions/fetchStaff/fetchFoodGroups'
import { fetchOrganizations } from '../../actions/fetchStaff/fetchOrganizations'
import { fetchQuestions } from '../../actions/fetchStaff/fetchQuestions'
import { fetchNpcs } from '../../actions/confirmReg/confirmNpc'
import { fetchOperators } from '../../actions/confirmReg/confirmOperator'

const logOutStyle = {
    display: 'inline',
    opacity: '0.4',
    fontSize: '0.8em'
}

class UserBar extends Component {
    componentDidMount() {
        const {isAuthenticated, user} = this.props.auth;
        const options = {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        // Fetch vendors
        this.props.fetchVendorsByRole(options, user)
        // Fetch countryList
        this.props.fetchCountriesByRole(options, isAuthenticated, user)
        // Fetch food group list
        this.props.fetchFoodGroups(options, isAuthenticated, user)
        // Organizations list
        this.props.fetchOrganizations(options)
        // Questions list
        this.props.fetchQuestions(options)
        // Fetch users to reg confirm
        // const currentUserData = props.auth.user 
        if (user.role === 'manager') {
            this.props.fetchNpcs()
        } 
        else if (user.role === 'npc') {
            this.props.fetchOperators()
        }
    }

    render() {
        const user = this.props.user
        return (
            <div className="authedUser_label_wrap">
                <Link to={`/userProfile/${user.id}`}>
                    <div className="authedUser_label_wrap__profileLable">
                        <img 
                        src={this.props.avatar} 
                        alt={this.props.name} 
                        title={this.props.name} 
                        className="rounded-circle" 
                        style={{ width: '25px', marginRight: '5px'}} />
                        <span className="text-dark">{this.props.name} ({user.role})</span>
                    </div>
                </Link>
                <a href="#" className="nav-link logOut" onClick={this.props.toLogOut} style={logOutStyle}>
                    Log Out    
                </a>
            </div>
        )
    }  
}

UserBar.propTypes = {
    auth: PropTypes.object.isRequired,
    fetchVendorsByRole: PropTypes.func.isRequired,
    fetchCountriesByRole: PropTypes.func.isRequired,
    fetchFoodGroups: PropTypes.func.isRequired,
    fetchQuestions: PropTypes.func.isRequired,
    fetchNpcs: PropTypes.func.isRequired,
    fetchOperators: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { 
    fetchVendorsByRole,
    fetchCountriesByRole,
    fetchFoodGroups,
    fetchOrganizations,
    fetchQuestions,
    fetchNpcs,
    fetchOperators
})(UserBar)