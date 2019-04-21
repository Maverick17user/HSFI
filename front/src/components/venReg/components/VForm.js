import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {fetchData} from '../../../actions/venreg/fetching'
import {inputChange} from '../../../actions/venreg/inputChange'
import {marked_inputChange} from '../../../actions/venreg/marked_inputChange'
import {multiSelecChange} from '../../../actions/venreg/multiSelecChange'

import BuisnessLocationGroup from './VForm-components/BuisnessLocationGroup'
import CountrySelect from './VForm-components/CountrySelect' 
import VenNameInput from './VForm-components/VenNameInput'
import BuisnessScheduleComponent from './VForm-components/BuisnessScheduleComponent'

class VForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            venPhotoURL: '',
            licScan: {},
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(e) {
        this.props.inputChange(e.target)
    }
    
    handleInputChangeWithFlag(e, index, prop) {
        this.props.marked_inputChange(e.target, index, prop)
    }

    handleMultiSelectChange(e, index, prop) {
        this.props.multiSelecChange(e.target, index, prop)
    }

    handleSubmit(e, data) {
        e.preventDefault();
        const Vendor = Object.assign({},data)
        console.log(Vendor);
        // this.props.regVendor(Vendor);
    }

    componentDidMount() {
        this.props.fetchData(this.props.auth.user.name)
    }

    render() {
        const { user } = this.props.auth
        const {dbCountries} = this.props.dbCountries
        const {vendorRegData} = this.props.vendorRegData

        console.log(vendorRegData)

        if (dbCountries.length === 0) {
            return <p>Fetching data...</p>
        }
        
        return (
            <form onSubmit={(e) => this.handleSubmit(e, vendorRegData)} className="mx-3">
                <div className="form-group">
                    <label htmlFor="operName">Operator's name</label>
                    <input type="text" className="form-control" placeholder="Operator's name" 
                    value={vendorRegData.operatorName} id="operName" readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="registred">Registration date</label>
                    <input type="text" className="form-control" placeholder="Registration date"
                    value={vendorRegData.regDate} id="registred" readOnly />
                </div>
                <CountrySelect dbCountries={dbCountries} handleMultiSelectChange={this.handleMultiSelectChange} />
                <VenNameInput venName={vendorRegData.venName} handleInputChange={this.handleInputChange} />
                <div className="form-group">
                    <label htmlFor="fileVenImg">Take a picture of vendor</label>
                    <input type="file" className="form-control-file" name="venPhotoURL" id="fileVenImg"  />
                </div>
                <div className="form-group">
                    <label htmlFor="licenseNum">License number</label>
                    <input type="text" className="form-control" onChange={this.handleInputChange} value={vendorRegData.licNumber}
                    name="licNumber" placeholder="License number" id="licenseNum"  />
                </div>
                <div className="form-group">
                    <label htmlFor="fileLicScan">Take skan license</label>
                    <input type="file" className="form-control-file" name="licScan" id="fileLicScan"  />
                </div>
                <div className="form-group">
                    <label htmlFor="tel">Phone</label>
                    <input type="tel" className="form-control" onChange={this.handleInputChange} value={vendorRegData.phone}
                    name="phone" placeholder="Phone" id="tel" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" onChange={this.handleInputChange} value={vendorRegData.email}
                    name="email" id="email" placeholder="Email"  />
                </div>
                {/* <BuisnessLocationGroup /> */}
                <span>Buisness location</span>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="city"><small>City</small></label>
                            <input type="text" className="form-control"  placeholder="City" id="city" name="city"
                            onChange={(e) => this.handleInputChangeWithFlag(e, 0, 'buisnessLocation')} value={vendorRegData.buisnessLocation[0].city || ''} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="street"><small>Street</small></label>
                            <input type="text" className="form-control"  placeholder="Street" id="street" name="street"
                            onChange={(e) => this.handleInputChangeWithFlag(e, 0, 'buisnessLocation')} value={vendorRegData.buisnessLocation[0].street || ''} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="number"><small>Object number</small></label>
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control"  placeholder="№" id="number" name="objNumber" 
                                    onChange={(e) => this.handleInputChangeWithFlag(e, 0, 'buisnessLocation')} 
                                    value={vendorRegData.buisnessLocation[0].objNumber || ''}/>
                                </div>
                                <div className="col">
                                    <button type="button" className="btn btn-success">Add</button>
                                    {/* {(tag !== 'initial') && <button type="button" className="btn btn-danger" 
                                    onClick={this.deleteLastGroup}>Delete</button>} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* delete it pls */}
                <BuisnessScheduleComponent 
                handleMultiSelectChange={this.handleMultiSelectChange}
                handleInputChangeWithFlag={this.handleInputChangeWithFlag}
                data={vendorRegData.buisnessSchedule}
                flag='initial'
                />
                {/* <span>Buisness schedule</span>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="work_day"><small>Day</small></label>
                            <div className="multiSelect-wrap">
                                <select multiple className="selectpicker form-control" id="work_day"
                                onChange={(e) => this.handleMultiSelectChange(e, 0, "buisnessSchedule")} name="day">
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
                            onChange={(e) => this.handleInputChangeWithFlag(e, 0, 'buisnessSchedule')} 
                            value={vendorRegData.buisnessSchedule[0].from || ''} />
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
                                            onChange={(e) => this.handleInputChangeWithFlag(e, 0, 'buisnessSchedule')} 
                                            value={vendorRegData.buisnessSchedule[0].to || ''}/>
                                        </div>
                                        <div className="col">
                                            <button type="button" className="btn btn-success">Add</button>
                                            <button type="button" className="btn btn-danger">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="form-group">
                    <label htmlFor="ing_source">Ingredient source</label>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" onChange={(e) => this.handleInputChangeWithFlag(e, 0, 'ingredientSource')} 
                            value={vendorRegData.ingredientSource[0].source || ''} name="source" placeholder="Ingredient source" id="ing_source" />
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-success">Add</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="f_group">Food group</label>
                    <select className="form-control" name="foodGroup" onChange={this.handleInputChange} id="f_group">
                        <option value={'Fructs'}>Fructs</option>
                        <option value={'Meat'}>Meat</option>
                        <option value={'Fast food'}>Fast food</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

VForm.propTypes = {
    auth: PropTypes.object.isRequired,
    dbCountries: PropTypes.object.isRequired,
    fetchData: PropTypes.func.isRequired,
    inputChange: PropTypes.func.isRequired,
    marked_inputChange: PropTypes.func.isRequired,
    multiSelecChange: PropTypes.func.isRequired,
    // errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    dbCountries: state.dbCountries,
    vendorRegData: state.vendorRegData
})

export default connect(mapStateToProps, {
    fetchData, 
    inputChange,
    marked_inputChange,
    multiSelecChange
})(VForm)