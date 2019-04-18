import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { addNewCountry } from '../actions/countries/addNewCountry'
import { NavLink, Route, Switch, Link, Redirect } from 'react-router-dom'

import RedactCountryList from './authHomeComponents/RedactCountryList'

class AuthHome extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        const {user} = this.props.auth;

        // Layout for unAuth user
        let authHome;

        const PanelLink = (props) => {
            return (
                <NavLink to={props.target} activeClassName="active" className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
                    {props.title}
                </NavLink>
            )
        }
        
        // Tab-Panel
        const ReadactPanelNav = function(props) {
            const PanelLinks = props.links.map((linkData, index) =>
                <PanelLink target={linkData.target} title={linkData.title} key={index.toString()}/>
            )
            
            return (
                <div className="col-3">
                    <div className="list-group" id="list-tab" role="tablist">
                        {PanelLinks}
                    </div>
                </div>
            )
        }

        // Food groups tab result component
        const RedactFoodGroups = () => {
            return (
                <div className="col-9">
                    Food Groups content.
                    <div className="form-group">
                      <input type="text"
                        className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                      <small id="helpId" className="form-text text-muted">Help text</small>
                    </div> 
                </div>
            )
        }

        const RedactOrganizations = () => {
            return (
                <div className="col-9">
                    Organizations content.
                </div>
            )
        }

        const RedactInspectionQuestions = () => {
            return (
                <div className="col-9">
                    Inspection Questions content.
                </div>
            )
        }

        const RedactNPCsRegRequests = () => {
            return (
                <div className="col-9">
                    NPC's Reg. Requests content.
                </div>
            )
        }

        const ReadactPanel = (props) => {

            const autoRegirectFromHome = () => {
                if(props.location.pathname === '/redactPanel') {
                    return (
                        <Redirect from="/redactPanel" to="/redactPanel/countryList" />
                    )
                }
            }

            return (
                <>  
                    <ReadactPanelNav links={props.linksData} />
                    <Switch>
                        <Route exact path="/redactPanel/countryList" component={RedactCountryList} />
                        <Route exact path="/redactPanel/foodGroups" component={RedactFoodGroups} />
                        <Route exact path="/redactPanel/organizationsList" component={RedactOrganizations} />
                        <Route exact path="/redactPanel/inspectionQuestions" component={RedactInspectionQuestions} />
                        <Route exact path="/redactPanel/NpcRequests" component={RedactNPCsRegRequests} />
                        {autoRegirectFromHome()}
                    </Switch>
                </>
            )
        }

        let navLinksData = [
            {title: 'Country list', target:  '/redactPanel/countryList'},
            {title: 'Food groups', target: '/redactPanel/foodGroups'},
            {title: 'Organizations', target: '/redactPanel/organizationsList'},
            {title: 'Inspection questions', target: '/redactPanel/inspectionQuestions'},
            {title: 'NPC"s reg. requests', target: '/redactPanel/NpcRequests'},
        ]

        switch (user.role) {
            case 'manager':
                authHome = (
                    <div className="row">
                        <ReadactPanel linksData={navLinksData} location={this.props.location} />
                    </div>
                )
                break;
            default: 
                authHome = null
                break;
        }

        return (
            <>
                {authHome}
            </>
        );
    }
}

AuthHome.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(withRouter(AuthHome));