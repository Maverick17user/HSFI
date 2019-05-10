import React from 'react'
import { connect } from 'react-redux';

import Profile from './venProfileComponents/Profile'

const VendorProfile = props => {
    
    const {dbVendors} = props.dbVendors
    const params = props.match.params

    const vendorData = dbVendors.find(vendor => vendor._id === params.vendorId)

    if(vendorData) {
        return <Profile {...props} venData={vendorData} />
    } else {
        return <p className="text-info">Loading vendor data...</p>
    }
}

const mapStateToProps = (state) => ({
    dbVendors: state.dbVendors
  })
  
export default connect(mapStateToProps)(VendorProfile)