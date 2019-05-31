import React from 'react' 
import classnames from 'classnames';

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
            <td>{(props.isOpen) ? 'Open' : 'Close'}</td>
            <td>{props.foodGroup}</td>
            <td className="text-success"
            className={classnames('text-success', {
                'text-danger': props.oss < 0
            })}
            >
                {(!props.oss) ? '-' : props.oss}
            </td>
            <td>
                {
                    (props.flagStatus !== 'red flagged') 
                    ? <img src="/img/flag-green.png" alt="No" /> 
                    : <img src="/img/flag-red.png" alt="Yes" />
                }
            </td>
            <td>{props.stars}</td> 
        </tr>
    )
}

export default TableRow