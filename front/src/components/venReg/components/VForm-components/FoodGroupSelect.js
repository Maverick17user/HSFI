import React from 'react'
import classnames from 'classnames'

const FoodGroupSelect = props => {
    return (
        <div className="form-group">
            <label htmlFor="f_group">Food group</label>
            <select 
            name="foodGroup" 
            onChange={props.handleInputChange} 
            id="f_group"
            className={classnames('form-control', {
                'is-invalid': props.errors,
            })} 
            >
                {props.dbFoodGroups.map((foodGroup, id) => {
                     return <option key={id.toString()} value={foodGroup}>{foodGroup}</option>
                })}
            </select>
            {props.errors && (<div className="invalid-feedback">{props.errors}</div>)}
        </div>
    )
}

export default FoodGroupSelect