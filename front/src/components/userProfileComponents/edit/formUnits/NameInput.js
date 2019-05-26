import React from 'react'
import classnames from 'classnames';
import CurentValue from '../../../common/CurentValue'

const NameInput = ({user, name, catchInputData, errors}) => {
    return(
        <div className="form-group">
            <label htmlFor="name">
                Name <CurentValue text={user.name}/>
            </label>
            <input
            onChange={(e) => catchInputData(e)}
            value={name}
            placeholder="Type in a new name"
            type="text" 
            name="name" 
            id="name"
            className={classnames('form-control form-control-lg', {
                'is-invalid': errors.name
            })}/>
            {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
        </div>
    )
}

export default NameInput