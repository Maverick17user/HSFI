import React from 'react'
import ReadactPageComponent from './ReadactPageComponent'

const RoleHomeComponent = props => {
    
    let roleHome;

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
    
    switch (props.userRole) {
        case 'manager':
            roleHome = (
                <div className="row">
                    <ReadactPageComponent userRole={props.userRole} linksData={managerNavLinksData} location={props.location} />
                </div>
            )
            break;
        case 'npc':
            roleHome = (
                <div className="row">
                    <ReadactPageComponent userRole={props.userRole} linksData={npcNavLinksData} location={props.location} />
                </div>
            )
            break;
        case 'operator':
            roleHome = (
                <div className="row">
                    <ReadactPageComponent userRole={props.userRole} linksData={npcNavLinksData} location={props.location} />
                </div>
            )
            break;
        default: 
            roleHome = <p className="text-warning">Error 404. Home page not found</p>
            break;
    }

    return (
        <div>{roleHome}</div>
    )
}

export default RoleHomeComponent