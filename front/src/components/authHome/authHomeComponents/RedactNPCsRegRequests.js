import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ConfirmRegistrationBlock from './regConfirm/ConfirmRegistrationBlock'
import {confirmRegister} from '../../../actions/confirmReg/confirm'
import {rejectRegister} from '../../../actions/confirmReg/reject'

const RedactNPCsRegRequests = props => {
    const currentUserData = props.auth.user 
    const usersToConfirm = props.usersToConfirm

    return (
        <div className="col-9">
            <p>NPC's Reg. Requests content.</p>
            <ConfirmRegistrationBlock 
            usersToConfirm={usersToConfirm} 
            role={currentUserData.role}
            confirmRegister={props.confirmRegister}
            rejectRegister={props.rejectRegister}/>
        </div>
    )
}

RedactNPCsRegRequests.propTypes = {
    auth:PropTypes.object.isRequired,
    usersToConfirm: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    usersToConfirm: state.usersToConfirm,
    errors: state.errors,
})

export default connect(mapStateToProps, {
    confirmRegister,
    rejectRegister
})(RedactNPCsRegRequests)