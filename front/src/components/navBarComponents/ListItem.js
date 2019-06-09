import React from 'react'
import { NavLink } from 'react-router-dom';

const ListItem = (props) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={props.to} activeClassName="active">{props.value}</NavLink>
        </li>
    )
}

export default ListItem