import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import UserBar from './navBarComponents/UserBar'

import { logoutUser } from '../actions/authentication';
import { resetState } from '../actions/resetState';
import { putCountriesIntoStore } from '../actions/countries/putCountriesIntoStore'
import { putOrganizationsListIntoStore } from '../actions/organizations/putOrganizationsListIntoStore'

class Navbar extends Component {
    constructor() {
        super()
        this.onLogout = this.onLogout.bind(this)
    }

    onLogout(e) {
        e.preventDefault();
        this.props.resetState()
        this.props.logoutUser(this.props.history);

        const options = {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        
        // Fetch countryList
        fetch('/api/countries/redactPanel/countryList', options)
        .then(resp => resp.json())
            .then(data => {
                this.props.putCountriesIntoStore(data)
            })
            .catch(err => console.log(err))
        
        // Organizations list
        fetch('/api/organizations/redactPanel/organizationsList', options)
        .then(resp => resp.json())
            .then(data => this.props.putOrganizationsListIntoStore(data))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        const options = {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        }

        // Fetch countryList
        fetch('/api/countries/redactPanel/countryList', options)
        .then(resp => resp.json())
            .then(data => {
                this.props.putCountriesIntoStore(data)
            })
            .catch(err => console.log(err))
        
        // Organizations list
        fetch('/api/organizations/redactPanel/organizationsList', options)
        .then(resp => resp.json())
            .then(data => this.props.putOrganizationsListIntoStore(data))
            .catch(err => console.log(err))
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;

        const initailTaskList = [
            {title:'Vendor registration', route:'/venRegistration'},
            {title:'Scratch card desk', route:'/venScratchCards'},
            {title:'Hotline', route:'/hotline'},
            {title:'Inspection', route:'/inspection'},
            {title:'Report', route:'/report'},
        ]

        const ListItem = (props) => {
            return (
                <li className="nav-item">
                    <NavLink className="nav-link" to={props.to} activeClassName="active">{props.value}</NavLink>
                </li>
            )
        }

        const TaskList = (props) => {
            let isForOperator = false

            if(props.operatorTasks) {
                isForOperator = true
            }

            const generateOperatorTasksData = (operatorTasks) => {
                return operatorTasks.map(taskName => {
                    console.log(taskName);
                    
                    switch (taskName) {
                        case 'Vendor Registration':
                            return {title: 'Vendor Registration', route: '/venRegistration'}
                        case 'Scratch card desk':
                            return {title: 'Scratch card desk', route: '/venScratchCards'}
                        case 'Hotline':
                            return {title: 'Hotline', route: '/hotline'}
                        case 'Inspection':
                            return {title: 'Inspection', route: '/inspection'}
                        default:
                            break;
                    }
                })
            }

            let tasks = (!isForOperator) ?  props.tasks : generateOperatorTasksData(props.operatorTasks)        

            return ( 
                <ul className="navbar-nav mr-auto">
                    {tasks.map((task, index) => {
                        return <ListItem key={index.toString()} value={task.title} to={task.route} />
                    })}
                </ul>
            )
        }

        let authLinks

        switch (user.role) {
            case 'manager':
                authLinks = (
                    <>
                        <TaskList tasks={initailTaskList} />
                        <UserBar avatar={user.avatar} name={user.name} user={user} toLogOut={this.onLogout} />
                    </>
                )
                break;
            case 'npc':
                authLinks = (
                    <>
                        <TaskList tasks={initailTaskList} />
                        <UserBar avatar={user.avatar} name={user.name} user={user} toLogOut={this.onLogout} />
                    </>
                )
                break;
            case 'operator':
                authLinks = (
                    <>
                        <TaskList operatorTasks={user.task} />
                        <UserBar avatar={user.avatar} name={user.name} user={user} toLogOut={this.onLogout} />
                    </>
                )
                break;
            default:
                break;
        }
        
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
        return(
            <header>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "white"}}>
                    <Link className="navbar-brand" to="/">
                        <img src="/img/logo.png" className="logo" alt="HSFI" height="30px" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar1">
                            {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        auth: state.auth
    })
}

export default connect(mapStateToProps, {
    logoutUser,
    resetState,
    putCountriesIntoStore,
    putOrganizationsListIntoStore
})(withRouter(Navbar))