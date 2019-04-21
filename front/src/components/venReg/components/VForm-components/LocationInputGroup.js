import React from 'react'

const LocationInputGroup = ({tag, add, remove}) => {
    return (
            <div className="row">
            <div className="col">
                <div className="form-group">
                    <label htmlFor="city"><small>City</small></label>
                    <input type="text" className="form-control"  placeholder="City" id="city" />
                </div>
            </div>
            <div className="col">
                <div className="form-group">
                    <label htmlFor="street"><small>Street</small></label>
                    <input type="text" className="form-control"  placeholder="Street" id="street" />
                </div>
            </div>
            <div className="col">
                <div className="form-group">
                    <label htmlFor="number"><small>Object number</small></label>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control"  placeholder="№" id="number" />
                        </div>
                        <div className="col">
                            {/* <button type="button" onClick={add} className="btn btn-success">Add</button>
                            {(tag !== 'initial') && <button type="button" className="btn btn-danger" 
                            onClick={remove}>Delete</button>} */}
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default LocationInputGroup