import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

const SerialCardNumberInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="serial">Card's serial number</label>
            <input 
            type="text" 
            className={classnames('form-control', {
                'is-invalid': props.errors.serialNumber
            })} 
            placeholder="First card's serial no." 
            id="serial" 
            name="serialNumber" 
            onChange={props.handleInputChange} 
            value={props.value}/>
            {props.errors.serialNumber && (<div className="invalid-feedback">{props.errors.serialNumber}</div>)}
        </div>
    ) 
}

SerialCardNumberInput.propTypes = {
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export default connect(mapStateToProps)(SerialCardNumberInput)

