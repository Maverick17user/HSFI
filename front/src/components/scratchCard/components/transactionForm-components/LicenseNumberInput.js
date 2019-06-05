import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

const LicenseNumberInput = props => {
    const {dbVendors} = props.dbVendors
    
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
            onBlur={() => props.fetchVendorData(props.value, dbVendors)}/>
            {props.errors.licNumber && (<div className="invalid-feedback">{props.errors.licNumber}</div>)}
        </div>
    ) 
}

LicenseNumberInput.propTypes = {
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    dbVendors: state.dbVendors
})

export  default connect(mapStateToProps)(LicenseNumberInput)