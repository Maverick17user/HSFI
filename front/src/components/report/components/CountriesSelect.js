import React from 'react'
import classnames from 'classnames'

const CountriesSelect = ({handleMultiSelectChangeHandler, dbCountries, errors}) =>  {
    return (
        <div className="form-group">
            <label htmlFor="country">Country</label>
            <select 
            multiple 
            name="countries" 
            onChange={(e) => handleMultiSelectChangeHandler(e)} 
            id="countries"
            className={classnames('form-control form-control-lg', {
                'is-invalid': errors.countries
            })}>
                {dbCountries.map((countryName, id) => {
                    return <option key={id.toString() + countryName} value={countryName}>{countryName}</option>
                })}
            </select>
            {errors.countries && (
                <div className="invalid-feedback">{errors.countries}</div>
            )}
        </div>
    )
}

export default CountriesSelect