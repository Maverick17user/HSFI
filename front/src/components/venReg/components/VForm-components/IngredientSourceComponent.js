import React from 'react';
import IngredientSourceUnit from './sub-components/IngredientSourceUnit'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const IngredientSourceComponent = props => {
    const {vendorRegData} = props.vendorRegData
    const ingredientSource = vendorRegData.ingredientSource

    let dopularUnits = null

    if(ingredientSource.length > 1) {
        let ingSourceUnits = [...vendorRegData.ingredientSource]

        // Delete first item because it is initial
        ingSourceUnits.shift()

        dopularUnits = ingSourceUnits.map((unit) => { 
            return <IngredientSourceUnit 
                handleInputChangeWithFlag={props.handleInputChangeWithFlag}
                index={Number(unit.id)}
                data={ingredientSource}
                key={unit.id.toString()} />    
        })
    }

    return (
        <>
            <IngredientSourceUnit 
            handleInputChangeWithFlag={props.handleInputChangeWithFlag}
            data={ingredientSource}
            flag="initial"
            index={Number(0)}
            key={toString(0)}/>
            {dopularUnits}
            {(props.errors) 
                ? <p className="text-danger"><small>{`${props.errors}`}</small></p> 
                : null
            }
        </>
    )
}

IngredientSourceComponent.propTypes = {
    vendorRegData: PropTypes.object.isRequired,
    handleInputChangeWithFlag: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    vendorRegData: state.vendorRegData
})

export default connect(mapStateToProps)(IngredientSourceComponent)