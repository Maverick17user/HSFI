import React from 'react'

const EmailInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" onChange={props.handleInputChange} value={props.value}
            name="email" id="email" placeholder="Email"  />
        </div>
    )
}

export default EmailInput