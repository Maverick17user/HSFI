import React from 'react'
import ContentTag from '../../ContentTag'
import {Link} from 'react-router-dom'

const TopBar = props => {
    return (
        <div className="vendors_pseudoHeader">
            <ContentTag title="Vendors"/>
            <div className="dropright-wrap">
                <div className="btn-group dropright">
                    <button type="button" className="btn btn-sm btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select format
                    </button>
                    <div className="dropdown-menu">
                        <Link to="/inspection/table">
                            <button className="dropdown-item" type="button">Table</button>
                        </Link>
                        <Link to="/inspection/map">
                            <button className="dropdown-item" type="button">Map</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar