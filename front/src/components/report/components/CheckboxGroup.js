import React from 'react'
import CheckboxInfoUnit from './infoUnits/CheckboxInfoUnit'

const CheckboxGroup = props => {
    const reportInfoUnits = [
        'Registered vendors',
        'Vendors by group',
        'Average OSS',
        'Total red flags',
        'Average quality stars',
        'Hotline calls',
        'Total card transactions',
        'Total revenues',
    ]

    return(
        <>
            {reportInfoUnits.map(infoUnitName => {
                return (
                    <CheckboxInfoUnit 
                    key={infoUnitName} 
                    name={infoUnitName}
                    checkboxHendler={props.checkboxHendler}/>
                )
            })}
            {(props.errors.reportQueries) 
                ? <p className="text-danger"><small>{`${props.errors.reportQueries}`}</small></p> 
                : null
            }
        </>
    )
}

export default CheckboxGroup