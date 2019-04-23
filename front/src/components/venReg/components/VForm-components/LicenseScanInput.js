import React from 'react'

const LicenseScanInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="fileLicScan">Take skan license</label>
            <input type="file" className="form-control-file" name="licScan" id="fileLicScan"  />
        </div>
    )
}

export default LicenseScanInput