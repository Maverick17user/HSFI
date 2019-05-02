import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ListOfAddedReadactItems from '../common/ListOfAddedReadactItems'

// Country list tab result component
class RedactCommonComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            [this.props.name]: '',
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
            [this.props.name]: e.target.value
        })
    }

    handleAddSubmit(e) {
        e.preventDefault();

        const targetName = {
            [this.props.name]: this.state[this.props.name]
        }
        
        switch (this.state.flag) {
            case 'add':
                this.props.addNewDataUnit(targetName);
                break;
            case 'remove':
                this.props.removeDataUnit(targetName);
                break;
            case 'edit':
                // TODO: implementation idea needed
                break;
            default:
                break;
        }

        this.setState({
            [this.props.name]: ''
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
        const props = this.props
        
        return (
            <div className="col-9">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                        <div className="row">
                            <div className="col-8">
                                <p className="text-primary">{props.title}</p>
                                <form className="form" onSubmit={this.handleAddSubmit}>
                                    <div className="form-group">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        name={props.name} 
                                        value={this.state[props.name]}
                                        placeholder={props.placeholderText} 
                                        onChange={this.handleInputChange} 
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors[props.name]
                                        })} 
                                        />
                                        {errors[props.name] && (<div className="invalid-feedback">{errors[props.name]}</div>)}
                                    </div>
                                    <div className="form-group">
                                        <button onClick={() => this.actionFlag('add')} type="submit" className="btn btn-success">Add</button>
                                        <button onClick={() => this.actionFlag('remove')} type="submit" className="btn btn-danger">Remove</button>
                                        <button onClick={() => this.actionFlag('edit')} type="submit" className="btn btn-info">Edit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-4">
                                <ListOfAddedReadactItems listTitle={props.listTitle} storeData={props.storeData}/>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                </div>
            </div>
        )
    }
}

RedactCommonComponent.propTypes = {
    name: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
    addNewDataUnit: PropTypes.func.isRequired,
    removeDataUnit: PropTypes.func.isRequired,
    storeData: PropTypes.array.isRequired,
}

export default RedactCommonComponent;