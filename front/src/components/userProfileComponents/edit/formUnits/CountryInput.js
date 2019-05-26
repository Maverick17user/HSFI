import React from 'react'
import classnames from 'classnames';
import CurentValue from '../../../common/CurentValue'

const CountryInput = ({user, country, catchInputData, errors}) => {
    return(
        <div className="form-group">
            <label htmlFor="country">
                Country <CurentValue text={user.country}/>
            </label>
            <input
            onChange={(e) => catchInputData(e)}
            value={country}
            placeholder="Type in a new country name"
            type="text" 
            name="country" 
            id="country"
            className={classnames('form-control form-control-lg', {
                'is-invalid': errors.country
            })}/>
            {errors.country && (<div className="invalid-feedback">{errors.country}</div>)}
        </div>
    )
}

export default CountryInput