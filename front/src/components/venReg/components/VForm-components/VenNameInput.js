import React from 'react'
import classnames from 'classnames'

const VenNameInput = ({venName, handleInputChange, errors}) => {
    return (
        <div className="form-group">
            <label htmlFor="venName">Vendor name</label>
            <input 
            type="text" 
            onChange={handleInputChange}
            className={classnames('form-control', {
                'is-invalid': errors,
            })} 
            value={venName} 
            name="venName" 
            placeholder="Vendor name" 
            id="venName" />
            {errors && (<div className="invalid-feedback">{errors}</div>)}
        </div>
    )
}

export default VenNameInput