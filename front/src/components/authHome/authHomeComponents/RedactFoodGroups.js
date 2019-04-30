import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addNewFoodGroup } from '../../../actions/foodGroups/addNewFoodGroup'
import { removeFoodGroup} from '../../../actions/foodGroups/removeFoodGroup'

import RedactCommonComponent from '../../common/RedactCommonComponent'

class RedactFoodGroups extends Component {
    render() {
        const props = this.props
        const {dbFoodGroups} = this.props.dbFoodGroups
        return (
            <>
                <RedactCommonComponent 
                name="foodGroup"
                errors={props.errors}
                title="Food group list redact form"
                addNewDataUnit={props.addNewFoodGroup}
                removeDataUnit={props.removeFoodGroup}
                storeData={dbFoodGroups}
                listTitle="Curent food group list"
                placeholderText="Food group name"
                />
            </>
        )
    }
}

RedactFoodGroups.propTypes = {
    addNewFoodGroup: PropTypes.func.isRequired,
    removeFoodGroup: PropTypes.func.isRequired,
    dbFoodGroups: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    dbFoodGroups: state.dbFoodGroups
})

export default connect(mapStateToProps, {addNewFoodGroup, removeFoodGroup})(withRouter(RedactFoodGroups));