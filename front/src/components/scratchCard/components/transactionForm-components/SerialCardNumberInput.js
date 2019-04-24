import React from 'react'

const SerialCardNumberInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="serial">First card's serial no.</label>
            <input type="text" className="form-control" placeholder="First card's serial no." 
            id="serial" name="serialNumber" onChange={props.handleInputChange} 
            value={props.value}/>
        </div>
    )
}

export default SerialCardNumberInput