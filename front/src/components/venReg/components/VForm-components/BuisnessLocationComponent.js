import React from 'react';
import BuisnessLocationUnit from './sub-components/BuisnessLocationUnit'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BuisnessLocationComponent = props => {
    const {vendorRegData} = props.vendorRegData
    const buisnessLocation = vendorRegData.buisnessLocation

    let dopularUnits = null

    if(buisnessLocation.length > 1) {
        let locationUnits = [...vendorRegData.buisnessLocation]

        // Delete first item because it is initial
        locationUnits.shift()

        dopularUnits = locationUnits.map((unit) => { 
            return <BuisnessLocationUnit 
                handleInputChangeWithFlag={props.handleInputChangeWithFlag}
                index={Number(unit.id)}
                data={buisnessLocation}
                key={unit.id.toString()} />    
        })
    }

    return (
        <>
            <BuisnessLocationUnit 
            handleInputChangeWithFlag={props.handleInputChangeWithFlag}
            data={buisnessLocation}
            flag="initial"
            index={Number(0)}
            key={toString(0)}/>
            {dopularUnits}
            {(props.errors) 
                ? <p className="text-danger"><small>{`${props.errors}`}</small></p> 
                : null
            }
        </>
    )
}

BuisnessLocationComponent.propTypes = {
    vendorRegData: PropTypes.object.isRequired,
    handleInputChangeWithFlag: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    vendorRegData: state.vendorRegData
})

export default connect(mapStateToProps)(BuisnessLocationComponent)