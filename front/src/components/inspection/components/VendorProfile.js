import React from 'react'
import { connect } from 'react-redux';

import Profile from './venProfileComponents/Profile'

const VendorProfile = props => {
    return <Profile {...props} />
}

const mapStateToProps = (state) => ({
    dbVendors: state.dbVendors
})
  
export default connect(mapStateToProps)(VendorProfile)