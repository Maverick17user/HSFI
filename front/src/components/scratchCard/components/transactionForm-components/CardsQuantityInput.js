import React from 'react'

const CardsQuantityInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="cards_quantity">Quantity of cards</label>
            <input type="text" className="form-control" placeholder="Quantity of cards" 
            id="cards_quantity" name="cardsQuantity" value={props.value}
            onChange={(e) => {
                props.handleInputChange(e)
                props.updateTotalCost()
            }} />
        </div>
    )
}

export default CardsQuantityInput