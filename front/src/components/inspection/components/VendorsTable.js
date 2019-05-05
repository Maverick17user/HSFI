import React from 'react'
import TableRow from './venTableComponents/TableRow'

const VendorsTable = props => {
    const dbVendors = props.dbVendors

    const getVenFrofile = (id) => {
        let selectedVendor = dbVendors.find(someVendor => someVendor._id === id)
        props.history.push(`/vendors/${selectedVendor._id}`)
    }
    
    return (
        <div className="col-9">
            <p className="text-info">Table ({dbVendors.length})</p>
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
                        {dbVendors.map((vendor,number) =>
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
                            {...props}
                            getVenFrofile={getVenFrofile}
                            />
                            
                        )}
                    </tbody>
                </table>
            </div>
            <div className="map-wrap"></div>
        </div>
    )
}

export default VendorsTable
