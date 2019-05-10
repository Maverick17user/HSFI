import React, {Component} from 'react'
import { connect } from 'react-redux';

import VendorsTable from './components/VendorsTable'
import VendorsMap from './components/VendorsMap'
import TopBar from './components/TopBar'
import SortBar from './components/SortBar'

import {Switch, Route, Redirect} from 'react-router-dom'

class InspectionDesk extends Component {

    render() {
        const {dbVendors} = this.props.dbVendors
        const {sortedVens} = this.props.sortedVens

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
                            //     (sortedVens.length === 0) 
                            //     ? dbVendors 
                            //     : sortedVens
                            // }
                            dbVendors={dbVendors}/>
                        } />
                        <Route exact path="/inspection/map" render={() => <VendorsMap {...this.props} dbVendors={dbVendors}/>} />
                    </Switch>
                    <SortBar dbVendors={dbVendors} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dbVendors: state.dbVendors,
    sortedVens: state.sortedVens
})

export default connect(mapStateToProps)(InspectionDesk)

