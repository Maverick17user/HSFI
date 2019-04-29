import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import RedactPanelNav from './RedactPanelNav'
import OperatorHome from './OperatorHome'

import RedactCountryList from './authHomeComponents/RedactCountryList'
import RedactFoodGroups from './authHomeComponents/RedactFoodGroups'
import RedactOrganizations from './authHomeComponents/RedactOrganizations'
import RedactInspectionQuestions from './authHomeComponents/RedactInspectionQuestions'
import RedactNPCsRegRequests from './authHomeComponents/RedactNPCsRegRequests'

const ReadactPageComponent = (props) => {

    const autoRegirectFromHome = () => {
        switch (props.userRole) {
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
    if (props.userRole === 'operator') {
        return <Route exact path="/redactPanel" component={OperatorHome} />
    }

    return (
        <>  
            <RedactPanelNav links={props.linksData} />
            <Switch>
                <Route exact path="/redactPanel/countryList" component={RedactCountryList} />
                {/* <Route exact path="/redactPanel/foodGroups" component={RedactFoodGroups} /> */}
                <Route exact path="/redactPanel/organizationsList" component={RedactOrganizations} />
                <Route exact path="/redactPanel/inspectionQuestions" component={RedactInspectionQuestions} />
                <Route exact path="/redactPanel/NpcRequests" component={RedactNPCsRegRequests} />
                {autoRegirectFromHome()}
            </Switch>
        </>
    )
}

export default ReadactPageComponent