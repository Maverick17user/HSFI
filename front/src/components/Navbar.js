import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;

        let authLinks

        switch (user.role) {
            case 'manager':
                authLinks = (
                    <>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Vendor registration desk</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Scratch card desk</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Hotline</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Inspection desk</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Report</a>
                            </li>
                        </ul>
                        <div className="authedUser_label_wrap">
                            <img src={user.avatar} alt={user.name} title={user.name} className="rounded-circle"
                            style={{ width: '25px', marginRight: '5px'}} />
                            <span className="text-info">{user.name} ({user.role})</span>
                            <a href="#" className="nav-link" onClick={this.onLogout.bind(this)} style={{display: 'inline'}}>
                                Log Out    
                            </a>
                        </div>
                    </>
                )
                break;
            case 'npc':
                authLinks = (
                    <>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Vendor registration desk</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Scratch card desk</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Hotline</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Inspection desk</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Report</a>
                            </li>
                        </ul>
                        <div className="authedUser_label_wrap">
                            <img src={user.avatar} alt={user.name} title={user.name} className="rounded-circle"
                            style={{ width: '25px', marginRight: '5px'}} />
                            <span className="text-info">{user.name} ({user.role})</span>
                            <a href="#" className="nav-link" onClick={this.onLogout.bind(this)} style={{display: 'inline'}}>
                                Log Out    
                            </a>
                        </div>
                    </>
                )
                break;
            case 'operator':
                function ListItem(props) {
                    return (
                        <li className="nav-item active">
                            <a className="nav-link" href="#">{props.value}</a>
                        </li>
                    )
                }
                function OperatorTasksList(props) {
                    const totalList = [...props.tasks].map((taskPoint, index) => 
                        <ListItem key={index.toString()} value={taskPoint} />
                    )
                    return (
                        <ul className="navbar-nav mr-auto">
                            {totalList}
                        </ul>
                    )
                }
                authLinks = (
                    <>
                        <OperatorTasksList tasks={user.task}/>
                        <div className="authedUser_label_wrap">
                            <img src={user.avatar} alt={user.name} title={user.name} className="rounded-circle"
                            style={{ width: '25px', marginRight: '5px'}} />
                            <span className="text-info">{user.name} ({user.role})</span>
                            <a href="#" className="nav-link" onClick={this.onLogout.bind(this)} style={{display: 'inline'}}>
                                Log Out    
                            </a>
                        </div>
                    </>
                )
                break;
            default:
                break;
        }
        
        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
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
            <header>
                <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">HSFI</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </nav>
            </header>
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