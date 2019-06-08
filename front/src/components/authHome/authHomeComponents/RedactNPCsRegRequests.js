import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ConfirmRegistrationBlock from './regConfirm/ConfirmRegistrationBlock'
import {confirmRegister} from '../../../actions/confirmReg/confirm'
import {rejectRegister} from '../../../actions/confirmReg/reject'

const alertStyles = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid gray',
    background: 'white'
}

const RedactNPCsRegRequests = props => {
    const currentUserData = props.auth.user 
    const usersToConfirm = props.usersToConfirm

    return (
        <div className="col-md-9 col-12">
            {(currentUserData.role === "manager")
                ? <p className="text-primary">NPC users confirming</p>
                : <p className="text-primary">Operator users confirming</p>
            }
            {(usersToConfirm.users.length === 0)
                ? (
                    <div style={alertStyles}>
                        <em className="text-dark">
                            <span><b className="text-danger" style={{fontSize: '1.25em'}}>!</b> All users confirmed.</span>
                        </em>
                    </div>
                )
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