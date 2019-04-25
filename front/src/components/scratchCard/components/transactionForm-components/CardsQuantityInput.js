import React from 'react'

const CardsQuantityInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="cards_quantity">Quantity of cards</label>
            <input type="text" className="form-control" placeholder="Quantity of cards" 
            id="cards_quantity" name="cardsQuantity" value={props.value}
            onChange={props.handleInputChange} />
        </div>
    )
}

export default CardsQuantityInput