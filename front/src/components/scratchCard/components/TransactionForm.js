import React, {Component} from 'react'
import store from '../../../store';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import axios from 'axios'

import {fetchInitialData} from '../../../actions/scratchCard/fetchInitialData'
import {inputChange} from '../../../actions/scratchCard/inputChange'
import {fetchVendorData} from '../../../actions/scratchCard/fetchVendorData'
import {setTotalCost} from '../../../actions/scratchCard/setTotalCost'
import {submitTransaction} from '../../../actions/scratchCard/submitTransaction'

import OperatorName_FetchedInput from './transactionForm-components/OperatorName_FetchedInput'
import TransactionDate_FetchedInput from './transactionForm-components/TransactionDate_FetchedInput'
import LicenseNumberInput from './transactionForm-components/LicenseNumberInput'
import VendorData_FetchedInputGroup from './transactionForm-components/VendorData_FetchedInputGroup'
import CardsQuantityInput from './transactionForm-components/CardsQuantityInput'
import SerialCardNumberInput from './transactionForm-components/SerialCardNumberInput'
import CardCostInput from './transactionForm-components/CardCostInput'
import CurrencyInput from './transactionForm-components/CurrencyInput'
import TotalCostInput from './transactionForm-components/TotalCostInput'

class TransactionForm extends Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.fetchVendorData = this.fetchVendorData.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(e) {
        store.dispatch(inputChange(e.target))
        store.dispatch(setTotalCost())
    }

    componentDidMount() {
        store.dispatch(fetchInitialData(this.props.auth.user.name))
    }

    fetchVendorData(vendorNumber, dbVendors) {
        if((vendorNumber)) {
            store.dispatch(fetchVendorData(vendorNumber, dbVendors))
        }
    }

    handleSubmit(e, data) {
        e.preventDefault()
        const newCard = Object.assign({},data)
        store.dispatch(submitTransaction(newCard))
    }

    render() {
        const {scratchCardData} = this.props.scratchCardData

        return (
            <form onSubmit={(e) => this.handleSubmit(e, scratchCardData)} className="mx-3">
                <OperatorName_FetchedInput value={scratchCardData.operatorName} />
                <TransactionDate_FetchedInput value={scratchCardData.transactionDate} />
                <LicenseNumberInput 
                value={scratchCardData.licNumber}
                handleInputChange={this.handleInputChange}
                fetchVendorData={this.fetchVendorData} />
                <VendorData_FetchedInputGroup scratchCardData={scratchCardData}/>
                <CardsQuantityInput 
                value={scratchCardData.cardsQuantity}
                handleInputChange={this.handleInputChange} />
                <SerialCardNumberInput 
                value={scratchCardData.serialNumber}
                handleInputChange={this.handleInputChange} />
                <div className="row">
                    <CardCostInput 
                    value={scratchCardData.cardCost}
                    handleInputChange={this.handleInputChange} />
                    <CurrencyInput handleInputChange={this.handleInputChange} />
                </div>
                <TotalCostInput value={scratchCardData.totalCost} />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

TransactionForm.propTypes = {
    auth: PropTypes.object.isRequired,
    scratchCardData: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    scratchCardData: state.scratchCardData,
})

export default connect(mapStateToProps)(TransactionForm)