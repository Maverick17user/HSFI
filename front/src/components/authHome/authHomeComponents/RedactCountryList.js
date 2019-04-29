import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addNewCountry } from '../../../actions/countries/addNewCountry'
import { removeCountry } from '../../../actions/countries/removeCountry'

import RedactCommonComponent from '../../common/RedactCommonComponent'

class RedactCountryList extends Component {
    render() {
        const props = this.props
        const {dbCountries} = this.props.dbCountries
        return (
            <>
                <RedactCommonComponent 
                name="country"
                errors={props.errors}
                title="Country list redact form"
                addNewDataUnit={props.addNewCountry}
                removeDataUnit={props.removeCountry}
                storeData={dbCountries}
                />
            </>
        )
    }
}

RedactCountryList.propTypes = {
    addNewCountry: PropTypes.func.isRequired,
    removeCountry: PropTypes.func.isRequired,
    dbCountries: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    dbCountries: state.dbCountries
})

export default connect(mapStateToProps, {addNewCountry, removeCountry})(withRouter(RedactCountryList));