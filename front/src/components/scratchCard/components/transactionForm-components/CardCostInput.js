import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

const CardCostInput = props => {
    return (
        <div className="col">
            <div className="form-group">
                <label htmlFor="1card_cost">Cost per card</label>
                <input 
                type="text" 
                className={classnames('form-control', {
                    'is-invalid': props.errors.cardCost
                })}  
                placeholder="Cost per card" 
                id="1card_cost" 
                name="cardCost" 
                value={props.value} 
                onChange={props.handleInputChange}/>
                {props.errors.cardCost && (<div className="invalid-feedback">{props.errors.cardCost}</div>)}
            </div>
        </div>
    ) 
}

CardCostInput.propTypes = {
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export default connect(mapStateToProps)(CardCostInput)