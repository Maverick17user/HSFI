import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addNewCountry } from '../../actions/countries/addNewCountry'
import { removeCountry } from '../../actions/countries/removeCountry'
import classnames from 'classnames';

import CountryList from './curCountryListComponents/CountryList'

// Country list tab result component
class RedactCountryList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            country: '',
            flag:'',
            errors: {}
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddSubmit = this.handleAddSubmit.bind(this);
        this.actionFlag = this.actionFlag.bind(this);
    }

    actionFlag(flag) {
        
        const setActiveFlag = () => this.setState({flag: flag})
        
        switch (flag) {
            case 'add':
                setActiveFlag()
                break;
            case 'remove':
                setActiveFlag()
                break;
            case 'edit':
                setActiveFlag()
                break;
            default:
                break;
        }
        
    }

    handleInputChange(e) {
        this.setState({
            country: e.target.value
        })
    }

    handleAddSubmit(e) {
        e.preventDefault();

        const countryName = {
            country: this.state.country,
        }
        
        switch (this.state.flag) {
            case 'add':
                this.props.addNewCountry(countryName);
                break;
            case 'remove':
                this.props.removeCountry(countryName);
                break;
            case 'edit':
                // TODO: implementation idea needed
                break;
            default:
                break;
        }

        this.setState({
            country: ''
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    

    render() {

        const {errors} = this.state
        
        return (
            <div className="col-9">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                        <div className="row">
                            <div className="col-8">
                                <p className="text-primary">Country list redact form</p>
                                <form className="form" onSubmit={this.handleAddSubmit}>
                                    <div className="form-group">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        name="country" 
                                        value={this.state.country}
                                        placeholder="Country name" 
                                        onChange={this.handleInputChange} 
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.country
                                        })} 
                                        />
                                        <p>State {this.state.country}</p>
                                        {errors.country && (<div className="invalid-feedback">{errors.country}</div>)}
                                    </div>
                                    <div className="form-group">
                                        <button onClick={() => this.actionFlag('add')} type="submit" className="btn btn-success">Add</button>
                                        <button onClick={() => this.actionFlag('remove')} type="submit" className="btn btn-danger">Remove</button>
                                        <button onClick={() => this.actionFlag('edit')} type="submit" className="btn btn-info">Edit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-4">
                                <CountryList />
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                </div>
            </div>
        )
    }
}

RedactCountryList.propTypes = {
    addNewCountry: PropTypes.func.isRequired,
    removeCountry: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
})

export  default connect(mapStateToProps, { addNewCountry, removeCountry })(withRouter(RedactCountryList));