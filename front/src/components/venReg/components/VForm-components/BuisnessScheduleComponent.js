import React, {Component} from 'react';
import BuisnessScheduleUnit from './sub-components/BuisnessScheduleUnit'

class BuisnessScheduleComponent extends Component {
    constructor(props){
        super(props);
      }
    render() {
        const props = this.props
        // const {vendorRegData} = this.props.vendorRegData
        return (
            <BuisnessScheduleUnit 
            handleMultiSelectChange={props.handleMultiSelectChange}
            handleInputChangeWithFlag={props.handleInputChangeWithFlag}
            data={props.data}
            flag="initial"
            />
        )
    }
}

// const mapStateToProps = (state) => ({
//     vendorRegData: state.vendorRegData
// })

export default BuisnessScheduleComponent