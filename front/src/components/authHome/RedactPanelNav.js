import React from 'react'
import PanelLink from './PanelLink'

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

export default ReadactPanelNav