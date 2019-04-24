import React from 'react'

const VenPicktureInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="fileVenImg">Take a picture of vendor</label>
            <input type="file" className="form-control-file" name="venPhotoURL" id="fileVenImg"  />
        </div>
    )
}

export default VenPicktureInput