import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import ContentTag from '../../ContentTag';

const UserProfileEdit = props => {
    const user = props.auth.user

    // Deffends against unexpected success
    if(user.id !== props.match.params.userId) {
        props.history.push('/')
        return null
    }

    return (
        <div className="container">
            <ContentTag title="Edit profile"/>
            <form>
                <div className="form-group">
                    <label htmlFor="name" >Name</label>
                    <input 
                    type="text" 
                    defaultValue={user.name} 
                    name="name" 
                    id="name"
                    className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email" >E-mail</label>
                    <input 
                    type="text" 
                    defaultValue={user.email} 
                    name="email" 
                    id="email"
                    className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password"
                    placeholder="Type in a new password"
                    name="password" 
                    id="password"
                    className="form-control"/>
                </div>
                {(user.role !== 'manager') && (
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input
                        type="text" 
                        defaultValue={user.country} 
                        name="country" 
                        id="country"
                        className="form-control"/>
                    </div>
                )}
                {(user.role !== 'operator') &&
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                        type="text" 
                        defaultValue={user.phone} 
                        name="phone" 
                        id="phone"
                        className="form-control"/>
                    </div>
                }
                <button type="submit" className="btn btn-success">Update</button>
            </form>
        </div>
    )
}

UserProfileEdit.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(UserProfileEdit)