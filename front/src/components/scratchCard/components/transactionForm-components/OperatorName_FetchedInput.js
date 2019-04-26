import React from 'react'

const OperatorName_FetchedInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="operName">Operator's name</label>
            <input type="text" className="form-control" placeholder="Operator's name" 
            value={props.value} id="operName" readOnly />
        </div>
    )
}

export default OperatorName_FetchedInput