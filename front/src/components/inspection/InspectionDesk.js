import React, {Component} from 'react'
import { connect } from 'react-redux';

import VendorsTable from './components/VendorsTable'
import VendorsMap from './components/VendorsMap'
import TopBar from './components/TopBar'
import SortBar from './components/SortBar'

import {sortBy_ALL} from '../../actions/sort/tableSort'
import {fetchVendorsByRole} from '../../actions/fetchStaff/fetchVendorsByRole'

import {Switch, Route, Redirect} from 'react-router-dom'

class InspectionDesk extends Component {

    componentWillMount() {
        const options = {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        }     
        this.props.fetchVendorsByRole(options, this.props.auth.user)
        this.props.fetchVendorsByRole(options, this.props.auth.user, 'sortBar')
    }

    render() {
        const {dbVendors} = this.props.dbVendors
        let {sortedVens} = this.props.sortedVens

        if(this.props.location.pathname === '/inspection') {
            return <Redirect from="/inspection" to="/inspection/table" />
        } 
        
        return (
            <div className="container viewVendors">
                <TopBar />
                <div className="row">
                    <Switch>
                        <Route exact path="/inspection/table" render={() => 
                            <VendorsTable 
                            {...this.props} 
                            sortedVens={sortedVens}
                            dbVendors={dbVendors}/>
                        } />
                        <Route exact path="/inspection/map" render={() => 
                            <div className="col-lg-9 col-12" >
                                <p className="text-info">Map ({sortedVens.length})</p>
                                <VendorsMap 
                                isMarkerShown 
                                {...this.props} 
                                sortedVens={sortedVens}
                                dbVendors={dbVendors}
                                /> 
                            </div>}
                        />
                    </Switch>
                    <SortBar history={this.props.history} dbVendors={dbVendors} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    dbVendors: state.dbVendors,
    sortedVens: state.sortedVens,
})

export default connect(mapStateToProps, {
    sortBy_ALL,
    fetchVendorsByRole
})(InspectionDesk)

