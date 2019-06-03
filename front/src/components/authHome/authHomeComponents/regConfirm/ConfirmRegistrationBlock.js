import React from 'react'

const style = {
    paddingBottom: "10px",
    fontSize: "1em"
}

const ConfirmRegistrationBlock = ({usersToConfirm, role, confirmRegister, rejectRegister}) => {
    const {users} = usersToConfirm

    return (
        <>
            {users.map(user => {
                return (
                    <div className='row' key={user._id} style={style}>
                        <div className='col-6'>
                            <small><b className="text-info">{user.name}</b> | </small>
                            <small>{user.email}</small>
                        </div>
                        <div className='col-3'>
                            <button type="button" onClick={() => confirmRegister(user, role)} className="btn btn-success btn-sm">Confirm</button>
                            <button type="button" onClick={() => rejectRegister(user, role)} className="btn btn-danger btn-sm">Reject</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}


export default ConfirmRegistrationBlock

