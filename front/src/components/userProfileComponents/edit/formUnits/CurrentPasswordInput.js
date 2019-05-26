import React from 'react'
import classnames from 'classnames';
import RequiredInputMark from '../../../common/RequiredInputMark'

const CurrentPasswordInput = ({password_cur, catchInputData, errors}) => {
    return(
        <div className="form-group">
            <label htmlFor="password_cur">
                Current password <RequiredInputMark/>
            </label>
            <input 
            onChange={(e) => catchInputData(e)}
            value={password_cur}
            type="password"
            placeholder="Type in current password"
            name="password_cur" 
            id="password_cur"
            className={classnames('form-control form-control-lg', {
                'is-invalid': errors.password_cur
            })}/>
            {errors.password_cur && (<div className="invalid-feedback">{errors.password_cur}</div>)}
        </div>
    )
}

export default CurrentPasswordInput