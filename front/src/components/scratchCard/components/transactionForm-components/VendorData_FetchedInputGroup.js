import React from 'react'

const VendorData_FetchedInputGroup = props => {
    const scratchCardData = props.scratchCardData
    
    return (
        <>
            <div className="form-group">
                <label htmlFor="venName">Vender's name</label>
                <input type="text" className="form-control" placeholder="Vender's name"
                value={scratchCardData.venName} id="venName" readOnly/>
            </div>
            <div className="venPicture-wrap">
                <img src={scratchCardData.venPhotoURL} alt="Input License number to load vendor's picture"/>
                <span>Vendor's picture</span>
            </div>
            <div className="form-group">
                <label htmlFor="foodGroup">Food group</label>
                <input type="text" className="form-control" placeholder="Food group" 
                value={scratchCardData.foodGroup} id="foodGroup" readOnly/>
            </div>
        </>
    )
}

export default VendorData_FetchedInputGroup