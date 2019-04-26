import React from 'react'

const ScratchCardSerialNumberInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="scsn">Scratch card serial number</label>
            <input type="text" className="form-control" placeholder="Scratch card serial number" 
            id="scsn" value={props.value} onChange={props.handleInputChange} name="scratchCardserialNumber" />
        </div>
    )
}

export default ScratchCardSerialNumberInput