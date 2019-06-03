import React from 'react'

const ReportDateInput = ({reportDate}) => {
    return(
        <div className="form-group">
            <label htmlFor="repDate">Report date</label>
            <input type="text" className="form-control"
            value={reportDate} id="repDate" readOnly />
        </div>
    )
}

export default ReportDateInput