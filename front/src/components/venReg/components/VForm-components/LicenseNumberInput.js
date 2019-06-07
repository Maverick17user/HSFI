import React from 'react'
import classnames from 'classnames';

const LicenseNumberInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="licenseNum">License number</label>
            <input 
            type="text" 
            className={classnames('form-control', {
                'is-invalid': props.errors,
            })} 
            onChange={props.handleInputChange} 
            value={props.value}
            name="licNumber" 
            placeholder="License number" 
            id="licenseNum"  />
            {props.errors && (<div className="invalid-feedback">{props.errors}</div>)}
        </div>
    )
}

export default LicenseNumberInput