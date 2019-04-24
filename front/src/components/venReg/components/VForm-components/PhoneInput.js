import React from 'react'

const PhoneInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="tel">Phone</label>
            <input type="tel" className="form-control" onChange={props.handleInputChange} value={props.value}
            name="phone" placeholder="Phone" id="tel" />
        </div>
    )
}

export default PhoneInput