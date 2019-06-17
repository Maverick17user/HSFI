import React from 'react'
import classnames from 'classnames';

const VenPictureInput = props => {
    return (
        <div className="form-group">
            <label htmlFor="fileVenImg">
                Picture of vendor
            </label>
            <input 
            type="file" 
            name="venPhotoURL" 
            id="fileVenImg" 
            onChange={(e) => props.catchPhoto(e)}
            className={classnames('form-control-file', {
                'is-invalid': props.errors,
            })} />
            {props.errors && (<div className="invalid-feedback">{props.errors}</div>)}
        </div>
    )
}

export default VenPictureInput