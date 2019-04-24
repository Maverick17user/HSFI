import React from 'react'
import ContentTag from '../ContentTag'
import TransactionForm from './components/TransactionForm'

const ScratchCardDesk = () => {
    return (
        <div className="container startTransaction">
            <ContentTag title="Scratch card desk" subscription="Transaction form" />
            <TransactionForm />
        </div>
    )
}

export default ScratchCardDesk