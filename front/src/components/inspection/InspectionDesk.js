import React, {Component} from 'react'
import ContentTag from '../ContentTag'
import { connect } from 'react-redux';

import VendorsTable from './components/VendorsTable'
import VendorsMap from './components/VendorsMap'

import {Link, Switch, Route, Redirect} from 'react-router-dom'

class InspectionDesk extends Component {

    render() {
        const {dbVendors} = this.props.dbVendors
        if(this.props.location.pathname === '/inspection') {
            return <Redirect from="/inspection" to="/inspection/table" />
        }
        
        return (
            // <Switch>
            //     <Route exact path={"/inspection/table" || "/inspection/"} render={() => (
                    <div className="container viewVendors">
                        <div className="vendors_pseudoHeader">
                            <ContentTag title="Vendors"/>
                            <div className="dropright-wrap">
                                <div className="btn-group dropright">
                                    <button type="button" className="btn btn-sm btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Select format
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link to="/inspection/table">
                                            <button className="dropdown-item" type="button">Table</button>
                                        </Link>
                                        <Link to="/inspection/map">
                                            <button className="dropdown-item" type="button">Map</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Switch>
                                <Route exact path="/inspection/table" render={(props) => <VendorsTable {...this.props} dbVendors={dbVendors}/>} />
                                <Route exact path="/inspection/map" render={(props) => <VendorsMap {...this.props} dbVendors={dbVendors}/>} />
                            </Switch>
                            <div className="col-3">
                                <div className="tableSort-wrap">
                                    <p className="text-info">Tabel sort form</p>
                                    <div className="tableSort">
                                        <form action="">
                                            <div className="form-group">
                                                <label htmlFor="country">Country</label>
                                                <select multiple className="selectpicker form-control" required id="country">
                                                    <option value="">Belarus</option>
                                                    <option value="">Russia</option>
                                                    <option value="">Ukraine</option>
                                                    <option value="">Finland</option>
                                                    <option value="">Norway</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="city">City</label>
                                                <select multiple className="selectpicker form-control" required id="city">
                                                    <option value="">Oslo</option>
                                                    <option value="">Bergen</option>
                                                    <option value="">Tromso</option>
                                                    <option value="">Tronheim</option>
                                                    <option value="">Sandefjord</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="status__o_c">Open / Closed</label>
                                                <select className="selectpicker form-control" required id="status__o_c" title="Nothing selected">
                                                    <option value="">Open</option>
                                                    <option value="">Closed</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="f_group">Food group</label>
                                                <select multiple className="selectpicker form-control" required id="f_group">
                                                    <option value="">Fructs</option>
                                                    <option value="">Meat</option>
                                                    <option value="">Fast food</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="oss">OSS</label>
                                                <input type="number" id="oss" className="form-control" placeholder="Nothing selected" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="flag">Flag</label>
                                                <select className="selectpicker form-control" required id="flag" title="Nothing selected">
                                                    <option value="">Yes (rad)</option>
                                                    <option value="">No (green)</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="stars">Stars</label>
                                                <input type="number" id="oss" className="form-control" placeholder="Nothing selected" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            //     )}/>
            //     <Route exact path={`/inspection/table/:vendorId` || `/inspection/map/:vendorId`} component={VendorProfile}/>
            // </Switch>
        )
    }
}

const mapStateToProps = (state) => ({
    dbVendors: state.dbVendors
})

export default connect(mapStateToProps)(InspectionDesk)

