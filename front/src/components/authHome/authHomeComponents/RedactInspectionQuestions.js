// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { addNewInspectQuestion } from '../../../actions/inspectQuestions/addNewInspectQuestion'
// import { removeInspectQuestion } from '../../../actions/inspectQuestions/removeInspectQuestion'

// import RedactCommonComponent from '../../common/RedactCommonComponent'

// class RedactInspectionQuestions extends Component {
//     render() {
//         const props = this.props
//         return (
//             // <div className="col-9">
//             //     Inspection Questions content.
//             // </div>
//             <>
//                 <RedactCommonComponent 
//                 name="inspectQuestions"
//                 errors={props.errors}
//                 title="Country list redact form"
//                 addNewDataUnit={props.addNewInspectQuestion}
//                 removeDataUnit={props.removeInspectQuestion}
//                 />
//             </>
//         )
//     }
// }

// RedactInspectionQuestions.propTypes = {
//     addNewInspectQuestion: PropTypes.func.isRequired,
//     removeInspectQuestion: PropTypes.func.isRequired,
// }

// const mapStateToProps = (state) => ({
//     errors: state.errors,
// })

// export default connect(mapStateToProps, {addNewInspectQuestion, removeInspectQuestion})(withRouter(RedactInspectionQuestions));