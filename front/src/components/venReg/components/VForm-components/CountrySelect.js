import React, {Component} from 'react'
import classnames from 'classnames';

class CountrySelect extends Component {
    render() {
        const {dbCountries, handleMultiSelectChange, errCountries} = this.props
        return (
            <div className="form-group">
                <label htmlFor="country">Country</label>
                <select multiple className="form-control" name="country" 
                onChange={(e) => handleMultiSelectChange(e, 0, "country")} 
                id="country"
                className={classnames('form-control form-control-lg', {
                    'is-invalid': errCountries,
                })}>
                    {dbCountries.map((countryName, id) => {
                        return <option key={id.toString()} value={countryName}>{countryName}</option>
                    })}
                </select>
                {errCountries
                    && (<div className="invalid-feedback">{errCountries}</div>)
                }
            </div>
        )
    }
}


export default CountrySelect