import React from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

const UserProfile = (props) => {
    const user = props.auth.user

    if(user.id === props.match.params.userId) {
        return(
            <div className="container uProfile">
                <h3 className="usProfile-h3">
                    {user.role.slice(0,1).toUpperCase() + user.role.slice(1)} profile
                </h3>
                <div className="row">
                    <div className="col-xl-3 col-md-4 col-12">
                        <div className="container d-flex justify-content-center align-items-center flex-column">
                            <img src={user.avatar} alt="User" className="userPhoto"/>
                            <div className="w-100 d-flex justify-content-around align-items-center">
                                <span className="uName">{user.name}</span>
                            </div>
                            <div className="w-100 d-flex justify-content-around align-items-center">
                                <Link to={`/userProfile/${props.match.params.userId}/edit`}>
                                    <button type="button" className="btn btn-success">
                                        Edit
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-md-8 col-12">
                        <div className="container">
                            <section>
                                <label className="lead">E-mail</label>
                                <a href="mailto:#">{user.email}</a>
                            </section>
                            {(user.role !== 'manager') && (
                                <section>
                                    <label className="lead">Country</label>
                                    <span className="profileData">{user.country}</span>
                                </section>
                            )}
                            {(user.role !== 'operator')
                                ? (
                                    <>
                                        {user.phone && 
                                            <section>
                                                <label className="lead">Phone</label>
                                                <span className="profileData">{user.phone}</span>
                                            </section>
                                        }
                                    </>
                                )
                                : (
                                    <>
                                        <section>
                                            <label className="lead">Tasks</label>
                                            <ul className="profileData">
                                                {user.task.map((taskUnit,i) => {
                                                    return <li className="userProfile-task--item" key={taskUnit+1}>{taskUnit}</li>
                                                })}
                                            </ul>
                                        </section>
                                        <section>
                                            <label className="lead">Organization</label>
                                            <span className="profileData">{user.organization}</span>
                                        </section>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        props.history.push('/')
        return null
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(UserProfile);