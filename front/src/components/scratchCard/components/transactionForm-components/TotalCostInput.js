import React from 'react'

const TotalCostInput = ({value}) => {
    return (
        <div className="form-group">
            <label htmlFor="totalSum">Total cost</label>
            <input type="text" className="form-control" placeholder="" id="totalSum" 
            name="totalCost" value={value} readOnly />
        </div>
    )
}

export default TotalCostInput
