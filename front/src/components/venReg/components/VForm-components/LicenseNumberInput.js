import React from 'react'

const LicenseNumberInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="licenseNum">License number</label>
            <input type="text" className="form-control" onChange={props.handleInputChange} value={props.value}
            name="licNumber" placeholder="License number" id="licenseNum"  />
        </div>
    )
}

export default LicenseNumberInput