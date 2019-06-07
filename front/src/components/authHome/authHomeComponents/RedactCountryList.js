import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNewCountry } from '../../../actions/countries/addNewCountry'
import { removeCountry } from '../../../actions/countries/removeCountry'

import RedactCommonComponent from '../../common/RedactCommonComponent'

const RedactCountryList = props => {
    const {dbCountries} = props.dbCountries
    return (
        <>
            <RedactCommonComponent 
            name="country"
            errors={props.errors}
            title="Country list redact form"
            addNewDataUnit={props.addNewCountry}
            removeDataUnit={props.removeCountry}
            storeData={dbCountries}
            listTitle="Curent country list"
            placeholderText="Country name"
            />
        </>
    )
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

export default connect(mapStateToProps, {addNewCountry, removeCountry})(RedactCountryList)