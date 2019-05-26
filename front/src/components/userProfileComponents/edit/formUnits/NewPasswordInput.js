import React from 'react'
import classnames from 'classnames';

const NewPasswordInput = ({password, catchInputData, errors}) => {
    return(
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
            onChange={(e) => catchInputData(e)}
            value={password}
            type="password"
            placeholder="Type in a new password"
            name="password" 
            id="password"
            className={classnames('form-control form-control-lg', {
                'is-invalid': errors.password
            })}/>
            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
        </div>
    )
}

export default NewPasswordInput