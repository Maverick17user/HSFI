import React from 'react';
import {addUnitIn} from '../../../../../actions/venreg/createNewShaduleObject'
import {removeUnitOut} from '../../../../../actions/venreg/removeShaduleObject'
import PropTypes from 'prop-types';
import store from '../../../../../store';

const IngredientSourceUnit = props => {
    const dataUnit = props.data.filter(unit => unit.id === props.index)[0]
    return (
        <div className="form-group">
            {(props.flag === 'initial') && <label htmlFor="ing_source">Ingredient source</label>}
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" onChange={(e) => props.handleInputChangeWithFlag(e, props.index, 'ingredientSource')} 
                    value={dataUnit.source || ''} name="source" placeholder="Ingredient source" id="ing_source" />
                </div>
                <div className="col">
                    {(props.flag === 'initial') && 
                    <button type="button" 
                    onClick={() => store.dispatch(addUnitIn('ingredientSource'))}
                    className="btn btn-success">Add</button>}
                    {(props.flag !== 'initial') && 
                    <button type="button" 
                    onClick={() => store.dispatch(removeUnitOut('ingredientSource', dataUnit.id))}
                    className="btn btn-danger">Remove</button>}
                </div>
            </div>
        </div>
    )
}

IngredientSourceUnit.propTypes = {
    data: PropTypes.array.isRequired,
    handleInputChangeWithFlag: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

export default IngredientSourceUnit