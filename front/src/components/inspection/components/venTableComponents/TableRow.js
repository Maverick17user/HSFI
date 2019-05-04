import React from 'react' 

const TableRow = props => {
    return (
        <tr onClick={() => props.getVenFrofile(props.id)}>
            <th scope="row">{props.number}</th>
            <td>
                {props.country.map((unit,i) => {
                    return unit.country.map(locUnit => <div key={locUnit+1}>{locUnit}</div>)
                })}
            </td>
            <td>
                {props.buisnessLocation.map(loc => {
                    return <div key={loc.city+1}>{loc.city}</div> 
                })}
            </td>
            <td>{props.status}</td>
            <td>{props.foodGroup}</td>
            <td className="text-success">{props.oss}</td>
            <td><img src="" alt={props.flag} /></td>
            <td>{props.stars}</td> 
        </tr>
    )
}

export default TableRow