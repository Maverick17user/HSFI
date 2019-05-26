import React from 'react'
import classnames from 'classnames';
import CurentValue from '../../../common/CurentValue'

const EmailInput = ({user, email, catchInputData, errors}) => {
    return(
        <div className="form-group">
            <label htmlFor="email" >
                E-mail <CurentValue text={user.email}/>
            </label>
            <input 
            onChange={(e) => catchInputData(e)}
            value={email}
            placeholder="Type in a new email"
            type="text"
            name="email" 
            id="email"
            className={classnames('form-control form-control-lg', {
                'is-invalid': errors.email
            })}/>
            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
        </div>
    )
}

export default EmailInput