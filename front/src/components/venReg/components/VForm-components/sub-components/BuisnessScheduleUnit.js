import React, {Component} from 'react';
import {createNewShaduleObject} from '../../../../../actions/venreg/createNewShaduleObject'
import {removeShaduleObject} from '../../../../../actions/venreg/removeShaduleObject'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

class BuisnessScheduleUnit extends Component {
    constructor(props) {
        super(props)
        this.addUnit= this.addUnit.bind(this)
        this.removeUnit= this.removeUnit.bind(this)
    }

    addUnit(prop) {
        this.props.createNewShaduleObject(prop)
    }

    removeUnit() {
        // this.props.removeShaduleObject()
    }

    render() {
        const props = this.props
        console.log(props.data);
        console.log(props.index);
        
        return (
            <>
                <span>Buisness schedule</span>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="work_day"><small>Day</small></label>
                            <div className="multiSelect-wrap">
                                <select multiple className="selectpicker form-control" id="work_day"
                                onChange={(e) => props.handleMultiSelectChange(e, props.index, "buisnessSchedule")} name="day">
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
                    <div className="col">
                        <div className="from-group">
                            <label htmlFor="work_from"><small>From</small></label>
                            <input type="time" className="form-control" id="work_from" name="from"
                            onChange={(e) => props.handleInputChangeWithFlag(e, props.index, 'buisnessSchedule')} 
                            value={props.data[props.index].from || ''} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="work_to"><small>To</small></label>
                                    <div className="row">
                                        <div className="col">
                                            <input type="time" className="form-control" id="work_to" name="to" 
                                            onChange={(e) => props.handleInputChangeWithFlag(e, props.index, 'buisnessSchedule')} 
                                            value={props.data[props.index].to || ''}/>
                                        </div>
                                        <div className="col">
                                            {(props.flag === 'initial') && 
                                            <button type="button" 
                                            onClick={this.addUnit('buisnessSchedule')}
                                            className="btn btn-success">Add</button>}
                                            {(props.flag !== 'initial') && 
                                            // onClick={}
                                            <button type="button" className="btn btn-danger">Remove</button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


BuisnessScheduleUnit.propTypes = {
    createNewShaduleObject: PropTypes.func.isRequired,
    // removeShaduleObject: PropTypes.func.isRequired,
    // errors: PropTypes.object.isRequired
}

export default connect({createNewShaduleObject})(BuisnessScheduleUnit)