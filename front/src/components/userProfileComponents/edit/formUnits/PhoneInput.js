import React from 'react'
import classnames from 'classnames';
import CurentValue from '../../../common/CurentValue'

const PhoneInput = ({user, phone, catchInputData, errors}) => {
    return(
        <div className="form-group">
            <label htmlFor="phone">
                Phone <CurentValue text={user.phone}/>
            </label>
            <input
            onChange={(e) => catchInputData(e)}
            value={phone}
            placeholder="Type in a new phone number"
            type="text" 
            name="phone" 
            id="phone"
            className={classnames('form-control form-control-lg', {
                'is-invalid': errors.phone
            })}/>
            {errors.phone && (<div className="invalid-feedback">{errors.phone}</div>)}
        </div>
    )
}

export default PhoneInput