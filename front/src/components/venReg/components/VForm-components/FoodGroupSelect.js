import React from 'react'

const FoodGroupSelect = props => {
    return (
        <div className="form-group">
            <label htmlFor="f_group">Food group</label>
            <select className="form-control" name="foodGroup" onChange={props.handleInputChange} id="f_group">
                <option value={'Fructs'}>Fructs</option>
                <option value={'Meat'}>Meat</option>
                <option value={'Fast food'}>Fast food</option>
            </select>
        </div>
    )
}

export default FoodGroupSelect