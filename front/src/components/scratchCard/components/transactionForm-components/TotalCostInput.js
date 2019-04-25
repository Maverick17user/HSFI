import React, {Component} from 'react'


// class TotalCostInput extends Component {
//     constructor() {
//         super()
//         // this.state = {
//         //     totalCost: ''
//         // }
//     }
//     componentWillReceiveProps() {
//         // console.log(this.props);
//         const props = this.props
//         const params = props.params
//         if((params[0] !== '') && (params[1] !== '') ) {
//             const totalCost = (params[0] * params[1])
//             console.log('s');
//             // this.setState({
//             //     totalCost: totalCost
//             // })
//             this.props.updateTotalCost()
//         }
//     }
//     render() {
//         // console.log(this.props);
        
//         return (
//             <div className="form-group">
//                 <label htmlFor="totalSum">Total cost</label>
//                 <input type="text" className="form-control" placeholder="" id="totalSum" 
//                 name="totalCost" value={this.props.value} readOnly />
//             </div>
//         )
//     }
// }

const TotalCostInput = ({value}) => {
    return (
        <div className="form-group">
            <label htmlFor="totalSum">Total cost</label>
            <input type="text" className="form-control" placeholder="" id="totalSum" 
            name="totalCost" value={value} readOnly />
        </div>
    )
}

export default TotalCostInput
