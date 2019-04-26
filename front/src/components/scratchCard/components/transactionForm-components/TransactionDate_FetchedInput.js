import React from 'react'

const TransactionDate_FetchedInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="registred">Transaction date</label>
            <input type="text" className="form-control" placeholder="Registration date"
            value={props.value} id="registred" readOnly />
        </div>
    )
}

export default TransactionDate_FetchedInput