import React, {Component} from 'react';
import {addUnitIn} from '../../../../../actions/venreg/createNewShaduleObject'
import {removeUnitOut} from '../../../../../actions/venreg/removeShaduleObject'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../../../../store';

class BuisnessScheduleUnit extends Component {
    constructor(props) {
        super(props)
        this.addUnit= this.addUnit.bind(this)
        this.removeUnit= this.removeUnit.bind(this)
    }

    addUnit(prop) {   
        store.dispatch(addUnitIn(prop))          
    }

    removeUnit(prop, index) {
        store.dispatch(removeUnitOut(prop, index))    
    }

    render() {
        const props = this.props
        const dataUnit = props.data.filter(unit => unit.id === props.index)[0]

        return (
            <div className="row venredBuisnessChoise chedule">
                <div className="col-lg-4 col-12">
                    <div className="form-group">
                        <span>{props.index}</span>
                        <label htmlFor="work_day"><small>Day</small></label>
                        <div className="multiSelect-wrap">
                            <select multiple className="selectpicker form-control" id="work_day"
                            onChange={(e) => props.handleMultiSelectChange(e, dataUnit.id, "buisnessSchedule")} name="day">
                                <option value={'Monday'}>Monday</option>
                                <option value={'Tuesday'}>Tuesday</option>
                                <option value={'Wednesday'}>Wednesday</option>
                                <option value={'Thursday'}>Thursday</option>
                                <option value={'Friday'}>Friday</option>
                                <option value={'Saturday'}>Saturday</option>
                                <option value={'Sunday'}>Sunday</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="from-group">
                        <label htmlFor="work_from"><small>From</small></label>
                        <input type="time" className="form-control" id="work_from" name="from"
                        onChange={(e) => props.handleInputChangeWithFlag(e, dataUnit.id, 'buisnessSchedule')} 
                        value={dataUnit.from} />
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="form-group">
                        <div className="row">
                            <div className="col-12">
                                <label htmlFor="work_to"><small>To</small></label>
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <input type="time" className="form-control" id="work_to" name="to" 
                                        onChange={(e) => props.handleInputChangeWithFlag(e, dataUnit.id, 'buisnessSchedule')} 
                                        value={dataUnit.to}/>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        {(props.flag === 'initial') && 
                                        <button type="button" 
                                        onClick={() => this.addUnit('buisnessSchedule')}
                                        className="btn btn-success">Add</button>}
                                        {(props.flag !== 'initial') && 
                                        <button type="button" 
                                        onClick={() => this.removeUnit('buisnessSchedule', dataUnit.id)}
                                        className="btn btn-danger">Remove</button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

BuisnessScheduleUnit.propTypes = {
    data: PropTypes.array.isRequired,
    handleMultiSelectChange: PropTypes.func.isRequired,
    handleInputChangeWithFlag: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

export default connect()(BuisnessScheduleUnit)