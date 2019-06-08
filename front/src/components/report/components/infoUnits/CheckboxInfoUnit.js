import React from 'react'

const CheckboxInfoUnit = ({name, checkboxHendler}) => {
    return(
        <div className="form-group">
            <div className="questions-wrap">
                <div className="ball">
                    <div className="form-check form-check-inline">
                        <label className="form-check-label checkingUnit">{name}</label>
                        <input className="form-check-input" name={name} type="checkbox" 
                        onChange={e => checkboxHendler(e)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckboxInfoUnit