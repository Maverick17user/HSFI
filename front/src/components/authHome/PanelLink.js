import React from 'react'
import { NavLink } from 'react-router-dom'

const PanelLink = (props) => {
    return (
        <NavLink to={props.target} activeClassName="active" className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
            {props.title}
        </NavLink>
    )
}

export default PanelLink