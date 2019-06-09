import React, {Component} from 'react';
import BuisnessScheduleUnit from './sub-components/BuisnessScheduleUnit'
import PropTypes from 'prop-types';

class BuisnessScheduleComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const props = this.props
        const {vendorRegData} = this.props.vendorRegData
        const buisnessSchedule = vendorRegData.buisnessSchedule

        let dopularUnits = null

        if(buisnessSchedule.length > 1) {
            let shcheduleUnits = [...vendorRegData.buisnessSchedule]

            // Delete first item because it is initial
            shcheduleUnits.shift()

            dopularUnits = shcheduleUnits.map((unit) => { 
                return <BuisnessScheduleUnit 
                    handleMultiSelectChange={props.handleMultiSelectChange}
                    handleInputChangeWithFlag={props.handleInputChangeWithFlag}
                    index={Number(unit.id)}
                    data={buisnessSchedule}
                    key={unit.id.toString()} />    
            })
        }

        return (
            <>
                <span>Buisness schedule</span>
                <BuisnessScheduleUnit 
                handleMultiSelectChange={props.handleMultiSelectChange}
                handleInputChangeWithFlag={props.handleInputChangeWithFlag}
                data={buisnessSchedule}
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
}

BuisnessScheduleComponent.propTypes = {
    handleMultiSelectChange: PropTypes.func.isRequired,
    handleInputChangeWithFlag: PropTypes.func.isRequired,
}

export default BuisnessScheduleComponent