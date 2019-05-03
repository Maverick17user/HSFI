import React, {Component} from 'react'
import store from '../../../store';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import axios from 'axios'

import {fetchInitialData} from '../../../actions/hotline/fetchInitialData'
import {inputChange} from '../../../actions/hotline/inputChange'
import {submitAction} from '../../../actions/hotline/submitAction'

import FetchedInputGroup from './formComponent/FetchedInputGroup'
import NationalCallerIDInput from './formComponent/NationalCallerIDInput'
import ScratchCardSerialNumberInput from './formComponent/ScratchCardSerialNumberInput'

class FormComponents extends Component {
    constructor() {
        super()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(e) {
        store.dispatch(inputChange(e.target))
    }

    componentDidMount() {
        store.dispatch(fetchInitialData(this.props.auth.user.name))
    }

    handleSubmit(e, callData) {
        e.preventDefault()
        store.dispatch(submitAction(callData))
    }

    render() {
        const {hotlineCall} = this.props.hotlineCall
        return (
            <form className="mx-3" onSubmit={(e) => this.handleSubmit(e, hotlineCall)}>
                <FetchedInputGroup 
                operatorName={hotlineCall.operatorName}
                callDate={hotlineCall.callDate} 
                />
                <NationalCallerIDInput 
                handleInputChange={this.handleInputChange}
                value={hotlineCall.callerNationalID}
                />
                <ScratchCardSerialNumberInput 
                handleInputChange={this.handleInputChange}
                value={hotlineCall.scratchCardserialNumber}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

FormComponents.propTypes = {
    auth: PropTypes.object.isRequired,
    hotlineCall: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    hotlineCall: state.hotlineCall,
})

export default connect(mapStateToProps)(FormComponents)