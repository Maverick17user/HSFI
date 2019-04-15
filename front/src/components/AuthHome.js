import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addNewCountry } from '../actions/countries/addNewCountry'
import { NavLink, Route, Switch, Link, Redirect } from 'react-router-dom'

class AuthHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputedCountry: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddSubmit = this.handleAddSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            inputedCountry: e.target.value
        })
    }

    handleAddSubmit(e) {
        e.preventDefault();
        const newCountry = {
            inputedCountry: this.state.inputedCountry,
        }
        this.props.addNewCountry(newCountry);
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

        // Country list tab result component
        const RedactCountryList = () => {
            return (
                <div className="col-9">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                            <div className="row">
                                <div className="col-8">
                                    <p className="text-primary">Country list redact form</p>
                                    <form className="form" onSubmit={this.handleAddSubmit}>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="inputedCountry"
                                                placeholder="Country name" onChange={this.handleInputChange} required />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-success">Add</button>
                                            <button type="submit" className="btn btn-danger">Remove</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-4">
                                    <p className="text-primary">Curent country list</p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Norway</li>
                                        <li className="list-group-item">Norway</li>
                                        <li className="list-group-item">Norway</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
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
    addNewCountry: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export  default connect(mapStateToProps, { addNewCountry })(withRouter(AuthHome));