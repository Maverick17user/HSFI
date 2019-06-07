import React from 'react'
import classnames from 'classnames'

const EmailInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            onChange={props.handleInputChange} 
            className={classnames('form-control', {
                'is-invalid': props.errors,
            })}  
            value={props.value}
            name="email" 
            id="email" 
            placeholder="Email" />
            {props.errors && (<div className="invalid-feedback">{props.errors}</div>)}
        </div>

    )
}

export default EmailInput