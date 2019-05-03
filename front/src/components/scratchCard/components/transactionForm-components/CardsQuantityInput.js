import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

const CardsQuantityInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="cards_quantity">Quantity of cards</label>
            <input type="text" 
            className={classnames('form-control', {
                'is-invalid': props.errors.cardsQuantity
            })} 
            placeholder="Quantity of cards" 
            id="cards_quantity" 
            name="cardsQuantity" 
            value={props.value}
            onChange={props.handleInputChange} />
            {props.errors.cardsQuantity && (<div className="invalid-feedback">{props.errors.cardsQuantity}</div>)}
        </div>
    ) 
}

CardsQuantityInput.propTypes = {
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export  default connect(mapStateToProps)(CardsQuantityInput)