import React from 'react'

const VenNameInput = ({venName, handleInputChange}) => {
    return (
        <div className="form-group">
            <label htmlFor="venName">Vendor name</label>
            <input type="text" className="form-control" onChange={handleInputChange} 
            value={venName} name="venName" placeholder="Vendor name" id="venName"  />
        </div>
    )
}

export default VenNameInput