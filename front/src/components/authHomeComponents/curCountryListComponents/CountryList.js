import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { putCountriesIntoStore } from '../../../actions/countries/putCountriesIntoStore'

class CountryList extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        fetch('/api/countries/redactPanel/countryList', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
            .then(data => this.props.putCountriesIntoStore(data))
            .catch(err => console.log(err))
    }

    render() {
        const {dbCountries} = this.props.dbCountries

        if (!dbCountries) return null;
        
        const ListElement = props => <li className="list-group-item">{props.countryName}</li>
        
        return (
            <>
                <p className="text-primary">Curent country list</p>
                <ul className="list-group list-group-flush">
                    {dbCountries.map((country, index) => {
                        return <ListElement countryName={country} key={index.toString()} />
                    })}
                </ul>
            </>
        )
    }
}

CountryList.propTypes = {
    putCountriesIntoStore: PropTypes.func.isRequired,
    dbCountries: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    dbCountries: state.dbCountries
})

export default connect(mapStateToProps, { putCountriesIntoStore })(withRouter(CountryList));