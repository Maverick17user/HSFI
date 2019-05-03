
import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

const ScratchCardSerialNumberInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="scsn">Scratch card serial number</label>
            <input type="text" 
            className={classnames('form-control', {
                'is-invalid': props.errors.scratchCardserialNumber
            })}
            placeholder="Scratch card serial number" 
            id="scsn" 
            value={props.value} 
            onChange={props.handleInputChange} 
            name="scratchCardserialNumber" />
            {props.errors.scratchCardserialNumber && (<div className="invalid-feedback">{props.errors.scratchCardserialNumber}</div>)}
        </div>
    ) 
}

ScratchCardSerialNumberInput.propTypes = {
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export  default connect(mapStateToProps)(ScratchCardSerialNumberInput)