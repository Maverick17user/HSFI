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

        const OperatorHome = () => {
            return (
                <div className="col-9">
                    Operator home component.
                </div>
            )
        }

        const ReadactPanel = (props) => {

            const autoRegirectFromHome = () => {
                switch (user.role) {
                    case 'manager':
                        if(props.location.pathname === '/redactPanel') {
                            return <Redirect from="/redactPanel" to="/redactPanel/countryList" />  
                        }
                        break;
                    case 'npc':
                        if(props.location.pathname === '/redactPanel') {
                            return <Redirect from="/redactPanel" to="/redactPanel/organizationsList" />  
                        }
                        break;
                    default:
                        break;
                }
            }

            // TODO: Move operator home outside ReadactPanel component
            if (user.role === 'operator') {
                return <Route exact path="/redactPanel" component={OperatorHome} />
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
        

        let managerNavLinksData = [
            {title: 'Country list', target:  '/redactPanel/countryList'},
            {title: 'Food groups', target: '/redactPanel/foodGroups'},
            {title: 'Organizations', target: '/redactPanel/organizationsList'},
            {title: 'Inspection questions', target: '/redactPanel/inspectionQuestions'},
            {title: 'NPC"s reg. requests', target: '/redactPanel/NpcRequests'},
        ]

        let npcNavLinksData = [
            {title: 'Organizations', target: '/redactPanel/organizationsList'},
        ]

        switch (user.role) {
            case 'manager':
                authHome = (
                    <div className="row">
                        <ReadactPanel linksData={managerNavLinksData} location={this.props.location} />
                    </div>
                )
                break;
            case 'npc':
                authHome = (
                    <div className="row">
                        <ReadactPanel linksData={npcNavLinksData} location={this.props.location} />
                    </div>
                )
                break;
            case 'operator':
                authHome = (
                    <div className="row">
                        <ReadactPanel linksData={npcNavLinksData} location={this.props.location} />
                    </div>
                )
                break;
            default: 
                authHome = <p className="text-warning">Error 404. Page not found</p>
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