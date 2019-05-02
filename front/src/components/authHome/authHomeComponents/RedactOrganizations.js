import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addNewOrg } from '../../../actions/organizations/addNewOrg'
import { removeOrg} from '../../../actions/organizations/removeOrg'

import RedactCommonComponent from '../../common/RedactCommonComponent'

class RedactOrganizations extends Component {
    render() {
        const props = this.props
        const {dborganizations} = this.props.dborganizations
        return (
            <>
                <RedactCommonComponent 
                name="organization"
                errors={props.errors}
                title="Organization list redact form"
                addNewDataUnit={props.addNewOrg}
                removeDataUnit={props.removeOrg}
                storeData={dborganizations}
                listTitle="Curent organization list"
                placeholderText="Organization name"
                />
            </>
        )
    }
}

RedactOrganizations.propTypes = {
    addNewOrg: PropTypes.func.isRequired,
    removeOrg: PropTypes.func.isRequired,
    dborganizations: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    dborganizations: state.dborganizations
})

export default connect(mapStateToProps, {addNewOrg, removeOrg})(withRouter(RedactOrganizations));