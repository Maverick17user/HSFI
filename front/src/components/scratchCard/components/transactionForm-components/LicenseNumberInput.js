import React from 'react'

const LicenseNumberInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="licNum">License number</label>
            <input type="text" className="form-control" placeholder="License number" id="licNum" value={props.value} 
            name="licNumber" onChange={props.handleInputChange} onBlur={() => props.fetchVendorData(props.value)}/>
        </div>
    )
}

export default LicenseNumberInput