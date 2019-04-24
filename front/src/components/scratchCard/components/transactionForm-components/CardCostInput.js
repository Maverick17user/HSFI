import React from 'react'

const CardCostInput = props => {
    return (
        <div className="col">
            <div className="form-group">
                <label htmlFor="1card_cost">Cost per card</label>
                <input type="text" className="form-control"  placeholder="Cost per card" 
                id="1card_cost" name="cardCost" value={props.value} 
                onChange={(e) => {
                    props.handleInputChange(e)
                    props.updateTotalCost()
                }} />
            </div>
        </div>
    )
}

export default CardCostInput