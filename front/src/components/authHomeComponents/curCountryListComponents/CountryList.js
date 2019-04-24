import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CountryList extends Component {

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
    dbCountries: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    dbCountries: state.dbCountries
})

export default connect(mapStateToProps)(withRouter(CountryList));