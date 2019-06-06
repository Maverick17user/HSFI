import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import UserBar from './navBarComponents/UserBar'

import { logoutUser } from '../actions/authentication';

class Navbar extends Component {
    constructor() {
        super()
        this.onLogout = this.onLogout.bind(this)
    }
    onLogout(e) {
        e.preventDefault();
        console.log(this.props.history);
        
        this.props.logoutUser(this.props.history);
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
                    <Link className="navbar-brand" to="/">
                        <img src="/img/logo.png" className="logo" alt="HSFI" height="30px"/>
                    </Link>
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

const mapStateToProps = (state) => {
    console.log(state);
    
    return ({
        auth: state.auth
    })
}

export default connect(mapStateToProps, {
    logoutUser
})(withRouter(Navbar))