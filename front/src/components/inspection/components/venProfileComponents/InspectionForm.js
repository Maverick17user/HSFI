import React from 'react'
import { connect } from 'react-redux'

const InspectionForm = props => {
    const user = props.auth.user
    const {dbVendors} = props.dbVendors
    const selectedVendor = dbVendors.filter(ven => ven._id === props.match.params.vendorId)[0]
    const licNum = selectedVendor.licNumber
    const vendorName = selectedVendor.venName
    const vendorPhoto = selectedVendor.venPhotoURL
    const foodGroup = selectedVendor.foodGroup
    const {dbquestions} = props.dbquestions

    return (
        <div className="container inspF">
            <h2>Inspection</h2>
        
            <form action="" className="px-4 py-3">
                <div className="form-group">
                    <label htmlFor="opName">Operator's Name</label>
                    <input type="text" className="form-control" value={user.name} id="opName" readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="insDate">Inspection date</label>
                    <input type="text" className="form-control" value={new Date().toLocaleString().slice(0,10)} id="insDate" readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="callerNatID">License number</label>
                    <input type="text" className="form-control" value= {licNum} id="callerNatID" readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="venName">Vendor's Name</label>  
                    <input type="text" className="form-control" value={vendorName} id="venName" readOnly />
                </div>
                <div className="venPicture-wrap">
                    <img src={vendorPhoto} alt="Loading ..." width="150px" />
                    <span>Vendor's picture</span>
                </div>
                <div className="form-group">
                    <label htmlFor="fGroup">Food group</label>
                    <input type="text" className="form-control" value={foodGroup} id="fGroup" readOnly />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="GPS">GPS location</label>
                    <input type="text" className="form-control" placeholder="GPS location" id="GPS" />
                </div> */}
                <div className="form-group">
                    {dbquestions.map(question => 
                        <div className="question-wrap">
                            <span>{question}</span>
                            <div className="ball">
                                <div className="plus">+</div>
                                <div className="minus">-</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="totalOSS">Total OSS</label>
                    <input type="text" className="form-control" placeholder="Overall Safety Score OSS" id="totalOSS" readOnly />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    dbquestions: state.dbquestions,
})

export default connect(mapStateToProps)(InspectionForm)

