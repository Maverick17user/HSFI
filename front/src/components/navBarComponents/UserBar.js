import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { putCountriesIntoStore } from '../../actions/countries/putCountriesIntoStore'
import { putFoodGroupesIntoStore } from '../../actions/foodGroups/putFoodGroupesIntoStore'
import { putOrganizationsListIntoStore } from '../../actions/organizations/putOrganizationsListIntoStore'
import { putInspectionQuestionsIntoStore } from '../../actions/questions/putInspectionQuestionsIntoStore'
import { putVendorsIntoStore } from '../../actions/venreg/putVendorsIntoStore'
import { fetchNpcs } from '../../actions/confirmReg/confirmNpc'
import { fetchOperators } from '../../actions/confirmReg/confirmOperator'

class UserBar extends Component {
    componentDidMount() {
        const {user} = this.props.auth;
        const options = {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        }

        // Fetch vendors
        fetch('/api/vendors/getAllVendors', options)
        .then(resp => resp.json())
            .then(data => {
                if(user.role === 'manager') {
                    this.props.putVendorsIntoStore(data)
                } 
                else {
                    const sortedVendorsByCountry = data.filter(ven => {
                        const venCountryList = ven.country[0].country
                        return venCountryList.every(country => country === user.country) === true 
                    })
                    
                    this.props.putVendorsIntoStore(sortedVendorsByCountry)
                }
            })
            .catch(err => console.log(err))
        .catch(err => console.log(err))

        // Fetch countryList
        fetch('/api/countries/redactPanel/countryList', options)
        .then(resp => resp.json())
            .then(data => {
                if(user.role === 'npc' || user.role === 'operator') {
                    const userCountry = data.filter(dataUnit => dataUnit.country === user.country) 
                    this.props.putCountriesIntoStore(userCountry)
                } 
                else {
                    this.props.putCountriesIntoStore(data)
                } 
            })
            .catch(err => console.log(err))

        // Fetch food group list
        fetch('/api/foodGroups/redactPanel/foodGroups', options)
        .then(resp => resp.json())
            .then(data => this.props.putFoodGroupesIntoStore(data))
            .catch(err => console.log(err))

        // Organizations list
        fetch('/api/organizations/redactPanel/organizationsList', options)
        .then(resp => resp.json())
            .then(data => this.props.putOrganizationsListIntoStore(data))
            .catch(err => console.log(err))
        
        // Questions list
        fetch('/api/questions/redactPanel/inspectionQuestions', options)
        .then(resp => resp.json())
            .then(data => this.props.putInspectionQuestionsIntoStore(data))
            .catch(err => console.log(err))

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
                    <img 
                    src={this.props.avatar} 
                    alt={this.props.name} 
                    title={this.props.name} 
                    className="rounded-circle" 
                    style={{ width: '25px', marginRight: '5px'}} />
                    <span className="text-info">{this.props.name} ({user.role})</span>
                </Link>
                <a href="#" className="nav-link" onClick={this.props.toLogOut} style={{display: 'inline'}}>
                    Log Out    
                </a>
            </div>
        )
    }  
}

// export default UserBar

UserBar.propTypes = {
    auth: PropTypes.object.isRequired,
    putCountriesIntoStore: PropTypes.func.isRequired,
    putFoodGroupesIntoStore: PropTypes.func.isRequired,
    putOrganizationsListIntoStore: PropTypes.func.isRequired,
    putInspectionQuestionsIntoStore: PropTypes.func.isRequired,
    putVendorsIntoStore: PropTypes.func.isRequired,
    fetchNpcs: PropTypes.func.isRequired,
    fetchOperators: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { 
    putCountriesIntoStore,
    putFoodGroupesIntoStore,
    putOrganizationsListIntoStore,
    putInspectionQuestionsIntoStore,
    putVendorsIntoStore,
    fetchNpcs,
    fetchOperators
})(UserBar)