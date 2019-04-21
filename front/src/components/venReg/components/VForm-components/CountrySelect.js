import React from 'react'

const CountrySelect = ({dbCountries, handleMultiSelectChange}) => {
    return (
        <div className="form-group">
            <label htmlFor="country">Country</label>
            <select multiple className="form-control" name="country" 
            onChange={(e) => handleMultiSelectChange(e, 0, "country")} id="country">
                {dbCountries.map((countryName, id) => {
                    return <option key={id.toString()} value={countryName}>{countryName}</option>
                })}
            </select>
        </div>
    )
}

export default CountrySelect