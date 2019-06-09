import React, {Component} from 'react'
import TableRow from './venTableComponents/TableRow'

class VendorsTable extends Component {
    constructor(props) {
        super(props)
        this.getVenFrofile = this.getVenFrofile.bind(this)
    }

    getVenFrofile = (id) => {
        const dbVendors = this.props.dbVendors
        let selectedVendor = dbVendors.find(someVendor => someVendor._id === id)
        
        this.props.history.push(`/vendors/${selectedVendor._id}`)
    }

    render() {
        const output = this.props.sortedVens 
        
        if (output) {
            return (
                <div className="col-lg-9 col-12">
                    <p className="text-info">Table ({output.length || ''})</p>
                    <div className="table-wrap">
                        <table className="table table-hover vendors__table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Status (O/C)</th>
                                    <th scope="col">Food group</th>
                                    <th scope="col">OSS</th>
                                    <th scope="col">Flag</th>
                                    <th scope="col">Stars</th>
                                </tr>
                            </thead>
                            <tbody>
                                {output.map((vendor,number) =>
                                    <TableRow 
                                    id={vendor._id}
                                    number={number+1} 
                                    country={vendor.country}
                                    buisnessLocation={vendor.buisnessLocation}
                                    foodGroup={vendor.foodGroup}
                                    flagStatus={vendor.flagStatus} 
                                    hasBeenFlagged={vendor.hasBeenFlagged} 
                                    oss={vendor.oss} 
                                    isOpen={vendor.isOpen}
                                    gps={vendor.gps}
                                    stars={vendor.stars}
                                    key={number+1}
                                    {...this.props}
                                    getVenFrofile={this.getVenFrofile}
                                    />
                                    
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="map-wrap"></div>
                </div>
            )
        }
        else {
            return null
        }
        
        
    }
}

export default VendorsTable
