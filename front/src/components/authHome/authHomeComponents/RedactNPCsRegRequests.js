import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ConfirmRegistrationBlock from './regConfirm/ConfirmRegistrationBlock'
import {confirmRegister} from '../../../actions/confirmReg/confirm'
import {rejectRegister} from '../../../actions/confirmReg/reject'

const RedactNPCsRegRequests = props => {
    const currentUserData = props.auth.user 
    const usersToConfirm = props.usersToConfirm
    console.log(usersToConfirm.users);
    
    return (
        <div className="col-9">
            {(currentUserData.role === "manager")
                ? <p>NPC users confirming</p>
                : <p>Operator users confirming</p>
            }
            {(usersToConfirm.users.length === 0)
                ? <em className="text-primary"><small>Here is no users to confirm!</small></em>
                : (
                    <ConfirmRegistrationBlock 
                    usersToConfirm={usersToConfirm} 
                    role={currentUserData.role}
                    confirmRegister={props.confirmRegister}
                    rejectRegister={props.rejectRegister}/>
                )
            }
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