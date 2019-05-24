import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import axios from 'axios'
import {fetchData} from '../../../actions/venreg/fetching'
import {inputChange} from '../../../actions/venreg/inputChange'
import {marked_inputChange} from '../../../actions/venreg/marked_inputChange'
import {multiSelecChange} from '../../../actions/venreg/multiSelecChange'
import {submitVenRegForm} from '../../../actions/venreg/submitVenRegForm'
import {getLocationCoordinates} from '../../../actions/venreg/getLocationCoordinates'

import OperatorName_FetchedInput from './VForm-components/OperatorName_FetchedInput'
import RegData_FetchedInput from './VForm-components/RegData_FetchedInput'
import CountrySelect from './VForm-components/CountrySelect' 
import VenNameInput from './VForm-components/VenNameInput'
import VenPicktureInput from './VForm-components/VenPicktureInput'
import LicenseNumberInput from './VForm-components/LicenseNumberInput'
import LicenseScanInput from './VForm-components/LicenseScanInput'
import PhoneInput from './VForm-components/PhoneInput'
import EmailInput from './VForm-components/EmailInput'
import BuisnessLocationComponent from './VForm-components/BuisnessLocationComponent'
import BuisnessScheduleComponent from './VForm-components/BuisnessScheduleComponent'
import IngredientSourceComponent from './VForm-components/IngredientSourceComponent'
import FoodGroupSelect from './VForm-components/FoodGroupSelect'

class VForm extends Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputChangeWithFlag = this.handleInputChangeWithFlag.bind(this)
        this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(e) {
        this.props.inputChange(e.target)
    }
    
    handleInputChangeWithFlag(e, index, prop) {
        this.props.marked_inputChange(e.target, index, prop)

        if (prop === 'buisnessLocation') {
            const {vendorRegData} = this.props.vendorRegData
            const locations = vendorRegData.buisnessLocation
            const currentLocationUnit = locations.find(location => location.id === index)

            if(currentLocationUnit) {
                const {city, street, objNumber} = currentLocationUnit

                if(city && street && objNumber) {
                    this.props.getLocationCoordinates(city, street, objNumber, index)
                }
            }
         
        }
    }

    handleMultiSelectChange(e, index, prop) {
        this.props.multiSelecChange(e.target, index, prop)
    }

    handleSubmit(e, data) {
        e.preventDefault();
        const newVendor = Object.assign({},data)
        this.props.submitVenRegForm(newVendor)
    }

    componentDidMount() {
        this.props.fetchData(this.props.auth.user.name)
    }

    render() {
        const {dbCountries} = this.props.dbCountries
        const {vendorRegData} = this.props.vendorRegData

        if (dbCountries.length === 0) {
            return <p>Fetching data...</p>
        }
        
        return (
            <form 
            onSubmit={(e) => {this.handleSubmit(e, vendorRegData)}} className="mx-3">
                <OperatorName_FetchedInput value={vendorRegData.operatorName} />
                <RegData_FetchedInput value={vendorRegData.regDate} />
                <CountrySelect dbCountries={dbCountries} handleMultiSelectChange={this.handleMultiSelectChange} />
                <VenNameInput venName={vendorRegData.venName} handleInputChange={this.handleInputChange} />
                {/* <VenPicktureInput/> */}
                <p className="text-warning">TODO: Vendor picture input</p>
                <LicenseNumberInput handleInputChange={this.handleInputChange} value={vendorRegData.licNumber}/>
                {/* <LicenseScanInput /> */}
                <p className="text-warning">TODO: License Scan input</p>
                <PhoneInput handleInputChange={this.handleInputChange} value={vendorRegData.phone}/>
                <EmailInput handleInputChange={this.handleInputChange} value={vendorRegData.email}/>
                <BuisnessLocationComponent 
                handleInputChangeWithFlag={this.handleInputChangeWithFlag}
                /> 
                <BuisnessScheduleComponent 
                handleMultiSelectChange={this.handleMultiSelectChange}
                handleInputChangeWithFlag={this.handleInputChangeWithFlag}
                />
                <IngredientSourceComponent 
                handleInputChangeWithFlag={this.handleInputChangeWithFlag}
                />
                <FoodGroupSelect handleInputChange={this.handleInputChange} />
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
    getLocationCoordinates: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    dbCountries: state.dbCountries,
    vendorRegData: state.vendorRegData
})

export default connect(mapStateToProps, {
    fetchData, 
    inputChange,
    submitVenRegForm,
    marked_inputChange,
    multiSelecChange,
    getLocationCoordinates
})(VForm)