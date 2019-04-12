import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        // console.log(this.props);
        const {isAuthenticated, user} = this.props.auth;

        let authLinks

        switch (user.role) {
            // case manager / operator...
            case 'npc':
                authLinks = (
                    <ul className="navbar-nav ml-auto">
                        <div className="authedUser_label_wrap">
                            <img src={user.avatar} alt={user.name} title={user.name} className="rounded-circle"
                            style={{ width: '25px', marginRight: '5px'}} />
                            <span className="text-info">{user.name} ({user.role})</span>
                            <a href="#" className="nav-link" onClick={this.onLogout.bind(this)} style={{display: 'inline'}}>
                                Log Out    
                            </a>
                        </div>
                    </ul>
                )
                break;
        
            default:
                break;
        }
        
        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    {/* <Link className="nav-link" to="/register"> */}
                    <div className="btn-group">
                        <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Registration
                        </button>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/registerManager">Manager</Link>
                            <Link className="dropdown-item" to="/register">NPC</Link>
                            <Link className="dropdown-item" to="/registerOperator">Operator</Link>
                        </div>
                    </div>
                    {/* </Link> */}
                </li>
                <li className="nav-item" style={{marginLeft: '25px'}}>
                    <div className="btn-group">
                        <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Log in as
                        </button>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/loginManager">Manager</Link>
                            <Link className="dropdown-item" to="/login">NPC</Link>
                            <Link className="dropdown-item" to="/loginOperator">Operator</Link>
                        </div>
                    </div>
                </li>
            </ul>
        )
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Redux Node Auth</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));