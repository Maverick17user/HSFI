import React from 'react';
import ContentTag from '../ContentTag'
import VForm from './components/VForm'

const VenRegForm = (props) => {
    return (
        <div className="container regVen">
            <ContentTag title="Vendor Registration Desk" subscription="Registration form" />
            <VForm {...props}/>
        </div>
    )
}

export default VenRegForm