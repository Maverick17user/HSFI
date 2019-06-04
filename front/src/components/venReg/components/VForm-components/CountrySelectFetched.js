import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchCountry} from '../../../../actions/venreg/fetchCountry'

class CountrySelectFetched extends Component {
    componentDidMount() {
        const {dbCountries} = this.props.dbCountries
        if (dbCountries.length === 1) {
            console.log('!');
            this.fetchCountry(dbCountries)
        }
    }

    render() {
        const props = this.props
        const {dbCountries} = props
        return (
            <div className="form-group">
                <label>Country</label>
                <input type="text" className="form-control" value={dbCountries[0]} readOnly />
            </div>
        )
    }
}

export default connect({fetchCountry})(CountrySelectFetched)