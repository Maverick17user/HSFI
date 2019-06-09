import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerManagerUser } from '../actions/authentication';
import classnames from 'classnames';


class RegisterManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            office: '',
            phone: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const Manager_user = {
            name: this.state.name,
            office: this.state.office,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerManagerUser(Manager_user, this.props.history);
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
            <div className="container" style={{maxWidth: '700px'}}>
                <h2>Registration</h2>
                <p className="text-info">Form for Manager</p>
                <form onSubmit={ this.handleSubmit }>
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
                        placeholder="Office"
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.office
                        })}
                        name="office"
                        onChange={ this.handleInputChange }
                        value={ this.state.office }
                        />
                        {errors.office && (<div className="invalid-feedback">{errors.office}</div>)}
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="Phone"
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.phone
                        })}
                        name="phone"
                        onChange={ this.handleInputChange }
                        value={ this.state.phone }
                        />
                        {errors.phone && (<div className="invalid-feedback">{errors.phone}</div>)}
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
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

RegisterManager.propTypes = {
    registerManagerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ registerManagerUser })(withRouter(RegisterManager))