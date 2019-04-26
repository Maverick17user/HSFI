import React from 'react'

const NationalCallerIDInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="callerNatID">National ID number of caller</label>
            <input type="text" className="form-control" placeholder="National ID number of caller" 
            id="callerNatID" value={props.value} onChange={props.handleInputChange} name="callerNationalID"/>
        </div>
    )
}

export default NationalCallerIDInput