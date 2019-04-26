import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { putCountriesIntoStore } from '../actions/countries/putCountriesIntoStore'

class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    componentDidMount() {
      fetch('/api/countries/redactPanel/countryList', {
          method: 'get',
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(resp => resp.json())
          .then(data => this.props.putCountriesIntoStore(data))
          .catch(err => console.log(err))
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;

        const initailTaskList = [
            {title:'Home', route:'/'},
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
                return [{title:'Home', route:'/'}].concat(operatorTasks.map(taskName => {
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
                }))
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

        // TODO: split to separated components
        const UserBar = (props) => {
            return (
                <div className="authedUser_label_wrap">
                    <img src={props.avatar} alt={props.name} title={props.name} className="rounded-circle"
                    style={{ width: '25px', marginRight: '5px'}} />
                    <span className="text-info">{props.name} ({props.role})</span>
                    <a href="#" className="nav-link" onClick={props.toLogOut} style={{display: 'inline'}}>
                        Log Out    
                    </a>
                </div>
            )
        }

        let authLinks

        switch (user.role) {
            case 'manager':
                authLinks = (
                    <>
                        <TaskList tasks={initailTaskList} />
                        <UserBar avatar={user.avatar} name={user.name} role={user.role} toLogOut={this.onLogout.bind(this)} />
                    </>
                )
                break;
            case 'npc':
                authLinks = (
                    <>
                        <TaskList tasks={initailTaskList} />
                        <UserBar avatar={user.avatar} name={user.name} role={user.role} toLogOut={this.onLogout.bind(this)} />
                    </>
                )
                break;
            case 'operator':
                authLinks = (
                    <>
                        <TaskList operatorTasks={user.task} />
                        <UserBar avatar={user.avatar} name={user.name} role={user.role} toLogOut={this.onLogout.bind(this)} />
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
                        {/* <img src="/./logo.png" alt="HSFI"/> */}
                        HSFI
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
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    putCountriesIntoStore: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser, putCountriesIntoStore })(withRouter(Navbar));