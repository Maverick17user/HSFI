import React from 'react'
import ContentTag from '../ContentTag'
import FormComponents from './components/FormComponents'

const HotlineForm = () => {
    return (
        <div className="container startTransaction">
            <ContentTag title="Record call" subscription="Call form" />
            <FormComponents />
        </div>
    )
}

export default HotlineForm