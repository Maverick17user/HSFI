import React from 'react'
import PanelLink from './PanelLink'

const style = {
    marginBottom: "25px"
}
// Tab-Panel
const ReadactPanelNav = function(props) {
    const PanelLinks = props.links.map((linkData, index) =>
        <PanelLink target={linkData.target} title={linkData.title} key={index.toString()}/>
    )
    
    return (
        <div className="col-md-3 col-12" style={style}>
            <div className="list-group" id="list-tab" role="tablist">
                {PanelLinks} 
            </div>
        </div>
    )
}

export default ReadactPanelNav