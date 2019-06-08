import React from 'react';
import {addUnitIn} from '../../../../../actions/venreg/createNewShaduleObject'
import {removeUnitOut} from '../../../../../actions/venreg/removeShaduleObject'
import PropTypes from 'prop-types';
import store from '../../../../../store';

const BuisnessLocationUnit = props => {
    const dataUnit = props.data.filter(unit => unit.id === props.index)[0]
    return (
        <>
            {(props.flag === 'initial') && <span>Buisness location</span>}
            <div className="row venredBuisnessChoise">
                <div className="col-lg-4 col-sm-6 col-12">
                    <div className="form-group">
                        <label htmlFor="city"><small>City</small></label>
                        <input type="text" className="form-control"  placeholder="City" id="city" name="city"
                        onChange={(e) => props.handleInputChangeWithFlag(e, props.index, 'buisnessLocation')} value={dataUnit.city || ''} />
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                    <div className="form-group">
                        <label htmlFor="street"><small>Street</small></label>
                        <input type="text" className="form-control"  placeholder="Street" id="street" name="street"
                        onChange={(e) => props.handleInputChangeWithFlag(e, props.index, 'buisnessLocation')} value={dataUnit.street || ''} />
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="form-group">
                        <label htmlFor="number"><small>Object number</small></label>
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <input type="text" className="form-control"  placeholder="№" id="number" name="objNumber" 
                                onChange={(e) => props.handleInputChangeWithFlag(e, props.index, 'buisnessLocation')} 
                                value={dataUnit.objNumber || ''}/>
                            </div>
                            <div className="col-lg-6 col-12">
                                {(props.flag === 'initial') && 
                                <button type="button" 
                                onClick={() => store.dispatch(addUnitIn('buisnessLocation'))}
                                className="btn btn-success">Add</button>}
                                {(props.flag !== 'initial') && 
                                <button type="button" 
                                onClick={() => store.dispatch(removeUnitOut('buisnessLocation', dataUnit.id))}
                                className="btn btn-danger">Remove</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

BuisnessLocationUnit.propTypes = {
    data: PropTypes.array.isRequired,
    handleInputChangeWithFlag: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

export default BuisnessLocationUnit