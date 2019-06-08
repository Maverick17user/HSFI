import React from 'react'

const rowStyle = {
    marginBottom: '10px'
}

const confirmStyle ={
    marginRight: '10px'
}

const style = {
    fontSize: "1.1em",
    padding: '10px 5px',
    paddingLeft: '30px',
    background: 'white'
}

const ConfirmRegistrationBlock = ({usersToConfirm, role, confirmRegister, rejectRegister}) => {
    const {users} = usersToConfirm
    return (
        <>
            {users.map(user => {
                return (
                    <div className='row' key={user._id} style={rowStyle}>
                        <div className='col-xl-6 col-12' style={style}>
                            <small><b>{user.name}</b> | </small>
                            <small>{user.email}</small>
                        </div>
                        <div className='col-xl-3 col-12 confirmChoise-wrap' style={style}>
                            <div>
                                <button type="button" onClick={() => confirmRegister(user, role)} style={confirmStyle} className="btn btn-success btn-sm">Confirm</button>
                                <button type="button" onClick={() => rejectRegister(user, role)} className="btn btn-danger btn-sm">Reject</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}


export default ConfirmRegistrationBlock

