import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import ContentTag from '../../ContentTag';

import RequiredInputMark from '../../common/RequiredInputMark'
import CurentValue from '../../common/CurentValue'
import {catchInputData} from '../../../actions/users/catchInputData'
import {transportSubmitedData} from '../../../actions/users/transportSubmitedData'

const UserProfileEdit = props => {
    const user = props.auth.user
    const {
        name, email, country, phone, password_cur, password
    } = props.userEditData

    const handleSubmit = (e, userEditData) => {
        e.preventDefault()
        const {
            name, email, country, phone, password_cur, password
        } = userEditData

        const editData = {
            name,
            email,
            country,
            phone,
            password_cur,
            password,
        }

        props.transportSubmitedData(editData, user, props.history)
    }
    
    return (
        <div className="container">
            <ContentTag title="Edit profile"/>
            <form onSubmit={e => handleSubmit(e, props.userEditData)}>
                <div className="form-group">
                    <label htmlFor="name">
                        Name <CurentValue text={user.name}/>
                    </label>
                    <input
                    onChange={(e) => props.catchInputData(e)}
                    value={name}
                    placeholder="Type in a new name"
                    type="text" 
                    name="name" 
                    id="name"
                    className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email" >
                        E-mail <CurentValue text={user.email}/>
                    </label>
                    <input 
                    onChange={(e) => props.catchInputData(e)}
                    value={email}
                    placeholder="Type in a new email"
                    type="text"
                    name="email" 
                    id="email"
                    className="form-control"/>
                </div>
                {(user.role !== 'manager') && (
                    <div className="form-group">
                        <label htmlFor="country">
                            Country <CurentValue text={user.country}/>
                        </label>
                        <input
                        onChange={(e) => props.catchInputData(e)}
                        value={country}
                        placeholder="Type in a new country name"
                        type="text" 
                        name="country" 
                        id="country"
                        className="form-control"/>
                    </div>
                )}
                {(user.role !== 'operator') &&
                    <div className="form-group">
                        <label htmlFor="phone">
                            Phone <CurentValue text={user.phone}/>
                        </label>
                        <input
                        onChange={(e) => props.catchInputData(e)}
                        value={phone}
                        placeholder="Type in a new phone number"
                        type="text" 
                        name="phone" 
                        id="phone"
                        className="form-control"/>
                    </div>
                }
                <div className="form-group">
                    <label htmlFor="password">
                        Current password <RequiredInputMark/>
                    </label>
                    <input 
                    onChange={(e) => props.catchInputData(e)}
                    value={password_cur}
                    type="password"
                    placeholder="Type in current password"
                    name="password_cur" 
                    id="password_cur"
                    className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                    onChange={(e) => props.catchInputData(e)}
                    value={password}
                    type="password"
                    placeholder="Type in a new password"
                    name="password" 
                    id="password"
                    className="form-control"/>
                </div>
                <button type="submit" className="btn btn-success">Update</button>
            </form>
        </div>
    )
}

UserProfileEdit.propTypes = {
    auth: PropTypes.object.isRequired,
    userEditData: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    userEditData: state.userEditData
});

export default connect(mapStateToProps, {
    catchInputData,
    transportSubmitedData
})(UserProfileEdit)