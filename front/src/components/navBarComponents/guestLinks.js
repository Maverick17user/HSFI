import React from 'react'
import { Link } from 'react-router-dom';

const guestLinks = (
    <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Register</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <Link className="dropdown-item" to="/registerManager">Manager</Link>
                <Link className="dropdown-item" to="/register">NPC</Link>
                <Link className="dropdown-item" to="/registerOperator">Operator</Link>
            </div>
        </li>
        <li className="nav-item dropdown lefted" style={{marginRight: '15px'}}>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Log in</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <Link className="dropdown-item" to="/loginManager">Manager</Link>
                <Link className="dropdown-item" to="/login">NPC</Link>
                <Link className="dropdown-item" to="/loginOperator">Operator</Link>
            </div>
        </li>
    </ul>
)

export default guestLinks