import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerOperatorUser } from '../actions/authentication';
import classnames from 'classnames';

class RegisterOperator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            country:'',
            name: '',
            organization: '',
            email: '',
            password: '',
            password_confirm: '',
            task: [],
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleMultiSelectChange(e) {
        this.setState({task: [...e.target.selectedOptions].map(o => o.value)});
    }

    handleSubmit(e) {
        e.preventDefault();
        const Operator_user = {
            country: this.state.country,
            name: this.state.name,
            organization: this.state.organization,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm,
            task: this.state.task,
        }
        console.log(this.state.task);
        this.props.registerOperatorUser(Operator_user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    render() {

        const { errors } = this.state;

        return(
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
                <h2>Registration</h2>
                <p className="text-info">Form for Operator</p>
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="Country"
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.country
                        })}
                        name="country"
                        onChange={ this.handleInputChange }
                        value={ this.state.country }
                        />
                        {errors.country && (<div className="invalid-feedback">{errors.country}</div>)}
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="Name"
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.name
                        })}
                        name="name"
                        onChange={ this.handleInputChange }
                        value={ this.state.name }
                        />
                        {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="Organization"
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.organization
                        })}
                        name="organization"
                        onChange={ this.handleInputChange }
                        value={ this.state.organization }
                        />
                        {errors.organization && (<div className="invalid-feedback">{errors.organization}</div>)}
                    </div>
                    <div className="form-group">
                        <input
                        type="email"
                        placeholder="Email"
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.email
                        })}
                        name="email"
                        onChange={ this.handleInputChange }
                        value={ this.state.email }
                        />
                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                    </div>
                    <div className="form-group">
                        <input
                        type="password"
                        placeholder="Password"
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.password
                        })}
                        name="password"
                        onChange={ this.handleInputChange }
                        value={ this.state.password }
                        />
                        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                    </div>
                    <div className="form-group">
                        <input
                        type="password"
                        placeholder="Confirm Password"
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.password_confirm
                        })}
                        name="password_confirm"
                        onChange={ this.handleInputChange }
                        value={ this.state.password_confirm }
                        />
                        {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                    </div>
                    <div className="form-group">
                        {/* <input
                        type="text"
                        placeholder="Task"
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.name
                        })}
                        name="task"
                        onChange={ this.handleInputChange }
                        value={ this.state.task }
                        />
                        {errors.name && (<div className="invalid-feedback">{errors.name}</div>)} */}
                        <label htmlFor="task">Task</label>
                        <select multiple={true} className={classnames('form-control', {
                            'is-invalid': errors.task
                        })} id="task" name="task"  onChange={ this.handleMultiSelectChange }>
                            <option value={ 'Vendor Registration' }>Vendor Registration</option>
                            <option value={ 'Scrathc card desk' }>Scrathc card desk</option>
                            <option value={ 'Hotline' }>Hotline</option>
                            <option value={ 'Inspection' }>Inspection</option>
                        </select>
                        {errors.task && (<div className="invalid-feedback">{errors.task}</div>)}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

RegisterOperator.propTypes = {
    registerOperatorUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ registerOperatorUser })(withRouter(RegisterOperator))