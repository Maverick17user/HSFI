import React from 'react'
import { connect } from 'react-redux';
import InspectionForm from './InspectionForm'
import Modal from 'react-responsive-modal'

const Profile = props => {
    const [open, setOpen] = React.useState(false)
    const {dbVendors} = props.dbVendors
    
    if (dbVendors.length > 0) {
        const venData = dbVendors.find(vendor => vendor._id === props.match.params.vendorId)
    
    return (
        <div className="container vProfile">
            <h3 className="venProfile-h3">Vendor profile</h3>
            <div className="row">
                <div className="col-lg-3 col-12 userCard">
                    <div className="d-flex justify-content-center align-items-center flex-column userCard-wrap">
                        <section>
                            <img src={venData.venPhotoURL} alt="Vendor" className="vendorPhoto"/>
                            <div className="w-100 d-flex justify-content-around align-items-center">
                                <span className="vName">{venData.venName}</span>
                            </div>
                            <div className="w-100 d-flex justify-content-around align-items-center">
                                {(venData.flagStatus === "red flagged")
                                    ? <button type="button" className="btn btn-outline-primary venInspectBut" 
                                    onClick={() => setOpen(true)}>Inspect</button>
                                    : <button disabled type="button" className="btn btn-outline-dark venInspectBut">Inspect</button>
                                }
                            </div>
                        </section>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="container">
                        <section>
                            <label className="lead">Country</label>
                            <ul className="profileData">
                                {venData.country.map((unit,i) => {
                                    return unit.country.map(locUnit => <li className="venProfile-country--item" key={locUnit+1}>{locUnit}</li>)
                                })}
                            </ul>
                        </section>
                        <section>
                            <label className="lead">License number</label>
                            <span className="profileData">{venData.licNumber}</span>
                        </section>
                        {venData.phone && 
                            <section>
                                <label className="lead">Phone</label>
                                <span className="profileData">{venData.phone}</span>
                            </section>
                        }
                        <address>
                            <label className="lead">E-mail</label>
                            <a href="mailto:#">{venData.email}</a>
                        </address>
                        <section>
                            <label className="lead">Food group</label>
                            <span className="profileData">{venData.foodGroup}</span>
                        </section>
                        <section>
                            <label className="lead">OSS value</label>
                            <span className="profileData text-info">
                                {(!venData.oss) ? 'No' : venData.oss}
                            </span>
                        </section>
                        <section>
                            <label className="lead">Was been flaged?</label>
                            <span className="profileData">
                                {(venData.hasBeenFlagged) ? 'Yes' : 'No'}
                            </span>
                        </section>
                        <section>
                            <label className="lead">Stars</label>
                            <span className="profileData">
                                {(!venData.stars) ? '0' : venData.stars}
                            </span>
                        </section>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12">
                    <div className="container">
                        <div className="table-wrap">
                            <section className="rightItem">
                                <label className="lead">Business location</label>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">City</th>
                                            <th scope="col">Street</th>
                                            <th scope="col">№</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {venData.buisnessLocation.map((loc,index) => {
                                            return (
                                                <tr key={loc.id}>
                                                    <th scope="row">{index+1}</th>
                                                    <td>{loc.city}</td>
                                                    <td>{loc.street}</td>
                                                    <td>{loc.objNumber}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </section>
                        </div>
                        <div className="table-wrap">
                            <section className="rightItem">
                                <label className="lead">Business schedule</label>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Day</th>
                                            <th scope="col">From</th>
                                            <th scope="col">To</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {venData.buisnessSchedule.map((schedule,index) => {
                                            return (
                                                <tr key={schedule.id}>
                                                    <th scope="row">{index+1}</th>
                                                    <td>
                                                        {schedule.day.map(day => <div key={day+1}>{day}</div>)}
                                                    </td>
                                                    <td>{schedule.from}</td>
                                                    <td>{schedule.to}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </section>
                        </div>
                        <section className="rightItem">
                            <label className="lead">Ingradient sources</label>
                            <ul className="list-group list-group-flush">
                                {venData.ingredientSource.map(sourceUnit => 
                                    <li key={sourceUnit.id} className="list-group-item">{sourceUnit.source}</li>
                                )}
                            </ul>
                        </section>  
                    </div>
                </div>
            </div>
            <div>
                <Modal open={open} onClose={() => setOpen(false)} center>
                    <InspectionForm {...props}/>
                </Modal>
            </div>
        </div>
    )
    }
    else {
        return null
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    dbVendors: state.dbVendors
})

export default connect(mapStateToProps)(Profile)