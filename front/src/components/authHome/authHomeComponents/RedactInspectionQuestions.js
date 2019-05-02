import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addNewQuestion } from '../../../actions/questions/addNewQuestion'
import { removeQuestion} from '../../../actions/questions/removeQuestion'

import RedactCommonComponent from '../../common/RedactCommonComponent'

class RedactInspectionQuestions extends Component {
    render() {
        const props = this.props
        const {dbquestions} = this.props.dbquestions
        return (
            <>
                <RedactCommonComponent 
                name="question"
                errors={props.errors}
                title="Inspection question list redact form"
                addNewDataUnit={props.addNewQuestion}
                removeDataUnit={props.removeQuestion}
                storeData={dbquestions}
                listTitle="Curent inspection questions"
                placeholderText="Question + ?"
                />
            </>
        )
    }
}

RedactInspectionQuestions.propTypes = {
    addNewQuestion: PropTypes.func.isRequired,
    removeQuestion: PropTypes.func.isRequired,
    dbquestions: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    dbquestions: state.dbquestions
})

export default connect(mapStateToProps, {addNewQuestion, removeQuestion})(withRouter(RedactInspectionQuestions));