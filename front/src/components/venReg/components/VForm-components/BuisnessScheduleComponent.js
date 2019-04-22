import React, {Component} from 'react';
import BuisnessScheduleUnit from './sub-components/BuisnessScheduleUnit'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BuisnessScheduleComponent extends Component {
    constructor(props){
        super(props);
      }
    render() {
        const props = this.props
        const {vendorRegData} = this.props.vendorRegData
        const buisnessSchedule = vendorRegData.buisnessSchedule

        let dopularUnits = null

        // The first item is initial
        buisnessSchedule.pop(buisnessSchedule[0])

        if(buisnessSchedule.length > 0) {
            dopularUnits = [...vendorRegData.buisnessSchedule].map((unit, index) => {
                return (
                    <BuisnessScheduleUnit 
                    handleMultiSelectChange={props.handleMultiSelectChange}
                    handleInputChangeWithFlag={props.handleInputChangeWithFlag}
                    data={buisnessSchedule}
                    index={Number(index+1)}
                    key={(index+1).toString()}
                    />
                )
            })
        }

        return (
            <>
                <BuisnessScheduleUnit 
                handleMultiSelectChange={props.handleMultiSelectChange}
                handleInputChangeWithFlag={props.handleInputChangeWithFlag}
                data={buisnessSchedule}
                flag="initial"
                index={Number(0)}
                />
                {dopularUnits}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    vendorRegData: state.vendorRegData
})

// BuisnessScheduleUnit.propTypes = {
//     vendorRegData: PropTypes.object.isRequired
// }

export default connect(mapStateToProps)(BuisnessScheduleComponent)
// export default BuisnessScheduleComponent