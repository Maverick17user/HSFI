import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

class CountrySelect extends Component {
    render() {
        const props = this.props
        const {dbCountries, handleMultiSelectChange} = props
        return (
            <div className="form-group">
                <label htmlFor="country">Country</label>
                <select multiple className="form-control" name="country" 
                onChange={(e) => handleMultiSelectChange(e, 0, "country")} 
                id="country"
                className={classnames('form-control form-control-lg', {
                    'is-invalid': props.errors.country
                })}>
                    {dbCountries.map((countryName, id) => {
                        return <option key={id.toString()} value={countryName}>{countryName}</option>
                    })}
                </select>
                {props.errors.country && (<div className="invalid-feedback">{props.errors.country}</div>)}
            </div>
        )
    }
}

CountrySelect.propTypes = {
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export  default connect(mapStateToProps)(CountrySelect)