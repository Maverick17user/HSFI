import React from 'react'

const RegData_FetchedInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="registred">Registration date</label>
            <input type="text" className="form-control" placeholder="Registration date"
            value={props.value} id="registred" readOnly />
        </div>
    )
}

export default RegData_FetchedInput