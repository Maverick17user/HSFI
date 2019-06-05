import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchCountry} from '../../../../actions/venreg/fetchCountry'

class CountrySelectFetched extends Component {
    componentDidMount() {
        const {dbCountries} = this.props.dbCountries
        if (dbCountries.length === 1) {
            console.log('!');
            this.props.fetchCountry(dbCountries)
        }
    }

    render() {
        const {vendorRegData} = this.props.vendorRegData
        const countryList = vendorRegData.country[0].country
        const {errors} = this.props
        let countryInput

        if(countryList === undefined) {
            countryInput = <input type="text" className="form-control" value={'Data loading ...'} readOnly disabled/>
        }
        else if (countryList.length === 1) {
            countryInput = <input type="text" className="form-control" value={countryList[0]} readOnly />
        }

        return (
            <div className="form-group">
                <label>Country</label>
                {countryInput}
                {errors.country && (
                    <div className="invalid-feedback">{errors.country}</div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    vendorRegData: state.vendorRegData,
    dbCountries: state.dbCountries
})

export default connect(mapStateToProps, {fetchCountry})(CountrySelectFetched)