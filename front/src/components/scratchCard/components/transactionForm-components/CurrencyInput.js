import React from 'react'

const CardCostInput = props => {
    return (
        <div className="col-sm-6 col-12">
            <div className="form-group">
                <label htmlFor="currency">Currency</label>
                <select className="form-control"  id="currency" name="currency"
                onChange={props.handleInputChange}>
                    <option value={"$"}>$</option>
                    <option value={"€"}>€</option>
                </select>
            </div>
        </div>
    )
}

export default CardCostInput