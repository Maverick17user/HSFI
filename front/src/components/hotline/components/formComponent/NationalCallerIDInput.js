import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

const NationalCallerIDInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="callerNatID">National ID number of caller</label>
            <input type="text" 
            className={classnames('form-control', {
                'is-invalid': props.errors.callerNationalID
            })}
            placeholder="National ID number of caller" 
            id="callerNatID" 
            value={props.value} 
            onChange={props.handleInputChange} 
            name="callerNationalID"/>
            {props.errors.callerNationalID && (<div className="invalid-feedback">{props.errors.callerNationalID}</div>)}
        </div>
    ) 
}

NationalCallerIDInput.propTypes = {
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export  default connect(mapStateToProps)(NationalCallerIDInput)