import React from 'react';
import ContentTag from '../ContentTag'
import VForm from './components/VForm'

const VenRegForm = () => {
    return (
        <div className="container regVen">
            <ContentTag title="Vendor Registration Desk" subscription="Registration form" />
            <VForm />
        </div>
    )
}

export default VenRegForm