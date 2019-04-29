// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { addNewFoodGroup } from '../../../actions/countries/addNewFoodGroup'
// import { removeFoodGroup } from '../../../actions/countries/removeFoodGroup'
// import classnames from 'classnames';

// import CountryList from './curCountryListComponents/CountryList'

// class RedactFoodGroups extends Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//             foogGroup: '',
//             flag:'',
//             errors: {}
//         }

//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleAddSubmit = this.handleAddSubmit.bind(this);
//         this.actionFlag = this.actionFlag.bind(this);
//     }

//     actionFlag(flag) {
//         const setActiveFlag = () => this.setState({flag: flag})
        
//         switch (flag) {
//             case 'add':
//                 setActiveFlag()
//                 break;
//             case 'remove':
//                 setActiveFlag()
//                 break;
//             case 'edit':
//                 setActiveFlag()
//                 break;
//             default:
//                 break;
//         }
        
//     }

//     handleInputChange(e) {
//         this.setState({
//             foogGroup: e.target.value
//         })
//     }

//     handleAddSubmit(e) {
//         e.preventDefault();

//         const targetName = {
//             foogGroup: this.state.foogGroup,
//         }
        
//         switch (this.state.flag) {
//             case 'add':
//                 this.props.addNewFoodGroup(targetName);
//                 break;
//             case 'remove':
//                 this.props.removeFoodGroup(targetName);
//                 break;
//             case 'edit':
//                 // TODO: implementation idea needed
//                 break;
//             default:
//                 break;
//         }

//         this.setState({
//             foogGroup: ''
//         })
//     }

//     componentWillReceiveProps(nextProps) {
//         if(nextProps.errors) {
//             this.setState({
//                 errors: nextProps.errors
//             });
//         }
//     }
    
//     render() {

//         const {errors} = this.state
        
//         return (
//             <div className="col-9">
//                 <div className="tab-content" id="nav-tabContent">
//                     <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
//                         <div className="row">
//                             <div className="col-8">
//                                 <p className="text-primary">Form group redact form</p>
//                                 <form className="form" onSubmit={this.handleAddSubmit}>
//                                     <div className="form-group">
//                                         <input 
//                                         type="text" 
//                                         className="form-control" 
//                                         name="foodGroup" 
//                                         value={this.state.foodGroup}
//                                         placeholder="Form group name" 
//                                         onChange={this.handleInputChange} 
//                                         className={classnames('form-control form-control-lg', {
//                                             'is-invalid': errors.foodGroup
//                                         })} 
//                                         />
//                                         {errors.foogGroup && (<div className="invalid-feedback">{errors.foogGroup}</div>)}
//                                     </div>
//                                     <div className="form-group">
//                                         <button onClick={() => this.actionFlag('add')} type="submit" className="btn btn-success">Add</button>
//                                         <button onClick={() => this.actionFlag('remove')} type="submit" className="btn btn-danger">Remove</button>
//                                         <button onClick={() => this.actionFlag('edit')} type="submit" className="btn btn-info">Edit</button>
//                                     </div>
//                                 </form>
//                             </div>
//                             <div className="col-4">
//                                 <CountryList />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// RedactFoodGroups.propTypes = {
//     addNewFoodGroup: PropTypes.func.isRequired,
//     removeFoodGroup: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
// }

// const mapStateToProps = (state) => ({
//     auth: state.auth,
//     errors: state.errors,
// })


// export default connect(mapStateToProps, { addNewFoodGroup, removeFoodGroup })(withRouter(RedactFoodGroups));