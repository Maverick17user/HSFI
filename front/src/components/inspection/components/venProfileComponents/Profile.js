import React from 'react'

const Profile = props => {
    const venData = props.venData
    
    return (
        <div className="container vProfile">
            <h3 className="venProfile-h3">Vendor profile</h3>
            <div className="row">
                <div className="col-3">
                    <div className="container">
                        <img src={venData.venPhotoURL} alt="Vendor" width="200px" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="container">
                        <p>
                            <span className="lead">Name</span><br/>
                            <span className="profileData">{venData.venName}</span>
                        </p>
                        <p>
                            <span className="lead">Country</span><br/>
                            <span className="profileData">
                                {venData.country.map((unit,i) => {
                                    return unit.country.map(locUnit => <div key={locUnit+1}>{locUnit}</div>)
                                })}
                            </span>
                        </p>
                        <p>
                            <span className="lead">License number</span><br/>
                            <span className="profileData">{venData.licNumber}</span>
                        </p>
                        {venData.phone && 
                            <p>
                                <span className="lead">Phone</span><br/>
                                <span className="profileData">{venData.phone}</span>
                            </p>
                        }
                        <address>
                            <span className="lead">E-mail</span><br/>
                            <a href="mailto:#">{venData.email}</a>
                        </address>
                        <p>
                            <span className="lead">Food group</span><br/>
                            <span className="profileData">{venData.foodGroup}</span>
                        </p>
                        <p>
                            <span className="lead">OSS</span><br/>
                            <span className="profileData text-success">4</span>
                        </p>
                    </div>
                </div>
                <div className="col-5">
                    <div className="container">
                        <div className="table-wrap">
                            <p>
                                <span className="lead">Business location</span><br/>
                            </p>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Street</th>
                                        <th scope="col">№</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Gomel</td>
                                        <td>Kojara</td>
                                        <td>65</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Minsk</td>
                                        <td>Zibickaia</td>
                                        <td>126a</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Pinsk</td>
                                        <td>Pobedi</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-wrap">
                            <p>
                                <span className="lead">Business schedule</span><br/>
                            </p>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Day</th>
                                        <th scope="col">From</th>
                                        <th scope="col">To</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Monday</td>
                                        <td>10:00</td>
                                        <td>17:00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Thursday</td>
                                        <td>10:00</td>
                                        <td>17:00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Sunday</td>
                                        <td>12:30</td>
                                        <td>21:00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <span className="lead">Ingradient sources</span><br/>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><span className="profileData">OAO "Miasnoy"</span></li>
                                <li className="list-group-item"><span className="profileData">Farmer Alex</span></li>
                            </ul>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile