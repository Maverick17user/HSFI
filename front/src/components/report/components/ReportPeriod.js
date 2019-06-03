import React from 'react'
import classnames from 'classnames'

const ReportPeriod = ({handleInputChange, errors})=> {
    return(
        <div className='form-group'>
            <label>Report period</label>
            <div className="row">
                <div className="col-6">
                    <label><small>From</small></label>
                    <input 
                    type="date" 
                    className={classnames('form-control', {
                        'is-invalid': errors.from || errors.date
                    })} 
                    name="from"
                    onChange={e => handleInputChange(e)}/>
                    {errors.from && (
                        <div className="invalid-feedback">{errors.from}</div>
                    )}
                    {errors.date && (
                        <div className="invalid-feedback">{errors.date}</div>
                    )}
                </div>
                <div className="col-6">
                    <label><small>To</small></label>
                    <input 
                    type="date" 
                    className={classnames('form-control', {
                        'is-invalid': errors.to || errors.date
                    })} 
                    name="to"
                    onChange={e => handleInputChange(e)}/>
                    {errors.to && (
                        <div className="invalid-feedback">{errors.to}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ReportPeriod