import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ButtonSubmit from '../common/ButtonSubmit'

import ReportDateInput from './components/ReportDateInput'
import ReportPeriod from './components/ReportPeriod'
import CountriesSelect from './components/CountriesSelect'
import CountriesSelectFetched from './components/CountriesSelectFetched'
import CheckboxGroup from './components/CheckboxGroup'
import DownloadContent from './components/DownloadContent'

import {fetchInitialData} from '../../actions/report/fetchInitialData'
import {inputChangeHandler} from '../../actions/report/inputChangeHandler'
import {multipleSelectChange} from '../../actions/report/multipleSelectChange'
import {checkboxAction} from '../../actions/report/checkboxAction'
import {submitAction} from '../../actions/report/submitAction'

class ReportForm extends Component {
    constructor() {
        super()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleMultiSelectChangeHandler = this.handleMultiSelectChangeHandler.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.checkboxHendler = this.checkboxHendler.bind(this)
    }

    componentDidMount() {
        const currentTime = new Date().toLocaleString().slice(0,10)
        this.props.fetchInitialData(currentTime)
    }

    handleInputChange = (e) => {
        this.props.inputChangeHandler(e.target)
    }

    handleMultiSelectChangeHandler(e) {
        this.props.multipleSelectChange(e.target)
    }

    checkboxHendler(e) {
        this.props.checkboxAction(e.target)
    }

    handleSubmit(e, data) {
        e.preventDefault();
        const userRole = this.props.auth.user.role
        if (userRole === 'manager') {
            this.props.submitAction(data)
        } 
        else {
            this.props.submitAction(data, 'noManager')
        }
    }

    render() {
        const {dbCountries} = this.props.dbCountries
        const errors = this.props.errors
        const {reportDate,from,to} = this.props.reportState

        const reportFileData = this.props.reportFileData
        
        return(
            <div className="container report-context">
                <h2>Report form</h2>
                <p className="text-info">Select info to be displayed in the report</p>
                <form onSubmit={e => this.handleSubmit(e, this.props.reportState)}>
                    <ReportDateInput 
                    reportDate={reportDate}/>
                    <ReportPeriod 
                    from={from} 
                    to={to} 
                    handleInputChange={this.handleInputChange}
                    errors={errors}/>
                    {(dbCountries.length === 1)
                        ? <CountriesSelectFetched />
                        : (
                            <CountriesSelect 
                            handleMultiSelectChangeHandler={this.handleMultiSelectChangeHandler} 
                            dbCountries={dbCountries}
                            errors={errors} />
                        )
                    }
                    <CheckboxGroup checkboxHendler={this.checkboxHendler} errors={errors}/>
                    <ButtonSubmit text='Create' />
                    {(reportFileData.length !== 0) && <DownloadContent name={'report.txt'} content={reportFileData} />}
                </form>
            </div>
        )
    }
}

ReportForm.propTypes = {
    reportState: PropTypes.object.isRequired,
    dbVendors: PropTypes.object.isRequired,
    dbCountries: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    reportFileData: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    reportState: state.reportState,
    dbVendors: state.dbVendors,
    dbCountries: state.dbCountries,
    errors: state.errors,
    reportFileData: state.reportFileData
})

export default connect(mapStateToProps, {
    fetchInitialData,
    inputChangeHandler,
    multipleSelectChange,
    checkboxAction,
    submitAction
})(ReportForm)