import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import ContentTag from '../../ContentTag';
import UserEditForm from './UserEditForm'

import {catchInputData} from '../../../actions/users/catchInputData'
import {transportSubmitedData} from '../../../actions/users/transportSubmitedData'
import {logoutUser} from '../../../actions/authentication'

const UserProfileEdit = props => {
    const user = props.auth.user

    const handleSubmit = (e, editData) => {
        e.preventDefault()

        props.transportSubmitedData(editData, user)
        .then(reso => {
            props.logoutUser(props.history)
            console.log(reso);
        })
        .catch(rej => console.log(rej))
    }

    return (
        <div className="container">
            <ContentTag title="Edit profile"/>
            <UserEditForm 
            handleSubmit={handleSubmit}
            catchInputData={props.catchInputData}
            user={user}
            userEditData={props.userEditData}
            errors={props.errors}
            />
        </div>
    )
}

UserProfileEdit.propTypes = {
    auth: PropTypes.object.isRequired,
    userEditData: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    userEditData: state.userEditData,
    errors: state.errors
});

export default connect(mapStateToProps, {
    catchInputData,
    transportSubmitedData,
    logoutUser
})(UserProfileEdit)