import React from 'react'
import classnames from 'classnames';
import CurentValue from '../../../common/CurentValue'

const CountryInput = ({dbCountries, user, catchInputData, errors}) => {
    return(
        <div className="form-group">
            <label htmlFor="country">
                Country <CurentValue text={user.country}/>
            </label>
            <select 
            name="country" 
            onChange={(e) => catchInputData(e)} 
            id="country"
            className={classnames('form-control form-control-lg', {
                'is-invalid': errors.country,
            })}>
                {dbCountries.map((countryName, id) => {
                    return <option key={id.toString()} value={countryName}>{countryName}</option>
                })}
            </select>
            {errors.country && (<div className="invalid-feedback">{errors.country}</div>)}      
        </div>
    )
}

export default CountryInput