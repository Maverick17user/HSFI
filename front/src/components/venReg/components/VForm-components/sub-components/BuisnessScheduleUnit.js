import React, {Component} from 'react';
import {createNewShaduleObject} from '../../../../../actions/createNewShaduleObject'
import {removeShaduleObject} from '../../../../../actions/removeShaduleObject'

class BuisnessScheduleUnit extends Component {
    constructor() {
        super()
        this.addUnit= this.addUnit.bind(this)
        this.removeUnit= this.removeUnit.bind(this)
    }

    addUnit() {
        this.props.createNewShaduleObject()
    }

    removeUnit() {
        this.props.removeShaduleObject()
    }

    render() {
        const props = this.props
        console.log(props.data);
        
        return (
            <>
                <span>Buisness schedule</span>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="work_day"><small>Day</small></label>
                            <div className="multiSelect-wrap">
                                <select multiple className="selectpicker form-control" id="work_day"
                                onChange={(e) => props.handleMultiSelectChange(e, 0, "buisnessSchedule")} name="day">
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
                            onChange={(e) => props.handleInputChangeWithFlag(e, 0, 'buisnessSchedule')} 
                            value={props.data[0].from || ''} />
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
                                            onChange={(e) => props.handleInputChangeWithFlag(e, 0, 'buisnessSchedule')} 
                                            value={props.data[0].to || ''}/>
                                        </div>
                                        <div className="col">
                                            {(props.flag === 'initial') && 
                                            <button type="button" 
                                            // onClick={}
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

export default BuisnessScheduleUnit