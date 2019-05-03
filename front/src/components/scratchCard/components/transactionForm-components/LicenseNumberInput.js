import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

const LicenseNumberInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="licNum">License number</label>
            <input type="text" 
            className={classnames('form-control', {
                'is-invalid': props.errors.licNumber
            })}
            placeholder="License number" 
            id="licNum" 
            value={props.value} 
            name="licNumber" 
            onChange={props.handleInputChange} 
            onBlur={() => props.fetchVendorData(props.value)}/>
            {props.errors.licNumber && (<div className="invalid-feedback">{props.errors.licNumber}</div>)}
        </div>
    ) 
}

LicenseNumberInput.propTypes = {
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export  default connect(mapStateToProps)(LicenseNumberInput)