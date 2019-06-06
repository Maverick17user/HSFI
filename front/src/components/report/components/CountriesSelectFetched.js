import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchCountry} from '../../../actions/report/fetchCountry'

class CountriesSelectFetched extends Component {
    componentDidMount() {
        const {dbCountries} = this.props.dbCountries
        if (dbCountries.length === 1) {
            this.props.fetchCountry(dbCountries)
        }
    }

    render() {
        const countries = this.props.reportState.countries
        let countryInput

        if(countries === undefined) {
            countryInput = <input type="text" className="form-control" value={'Data loading ...'} readOnly disabled/>
        }
        else if (countries.length === 1) {
            countryInput = <input type="text" className="form-control" value={countries[0]} readOnly />
        }

        return (
            <div className="form-group">
                <label>Country</label>
                {countryInput}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    vendorRegData: state.vendorRegData,
    reportState: state.reportState,
    dbCountries: state.dbCountries
})

export default connect(mapStateToProps, {fetchCountry})(CountriesSelectFetched)