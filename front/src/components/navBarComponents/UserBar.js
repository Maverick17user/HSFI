import React from 'react'
import {Link} from 'react-router-dom'

const UserBar = (props) => {
    const user = props.user
    
    return (
        <div className="authedUser_label_wrap">
            <Link to={`/userProfile/${user.id}`}>
                <img src={props.avatar} alt={props.name} title={props.name} className="rounded-circle"
                style={{ width: '25px', marginRight: '5px'}} />
                <span className="text-info">{props.name} ({user.role})</span>
            </Link>
            <a href="#" className="nav-link" onClick={props.toLogOut} style={{display: 'inline'}}>
                Log Out    
            </a>
        </div>
    )
}

export default UserBar