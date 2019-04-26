import React from 'react'

const FetchedInputGroup = props => {
    return(
        <>
            <div className="form-group">
                <label htmlFor="opName">Operator's Name</label>
                <input type="text" className="form-control" placeholder="Operator's Name" 
                value={props.operatorName} id="opName" readOnly />
            </div>
            <div className="form-group">
                <label htmlFor="callDate">Call date</label>
                <input type="text" className="form-control" placeholder="Call date" 
                value={props.callDate} id="callDate" readOnly />
            </div>
        </>
    )
}

export default FetchedInputGroup