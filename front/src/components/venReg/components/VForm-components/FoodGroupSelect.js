import React from 'react'

const FoodGroupSelect = props => {
    return (
        <div className="form-group">
            <label htmlFor="f_group">Food group</label>
            <select className="form-control" name="foodGroup" onChange={props.handleInputChange} id="f_group">
                {props.dbFoodGroups.map((foodGroup, id) => {
                     return <option key={id.toString()} value={foodGroup}>{foodGroup}</option>
                })}
            </select>
        </div>
    )
}

export default FoodGroupSelect