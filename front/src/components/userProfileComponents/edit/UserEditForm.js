import React from 'react'

import NameInput from './formUnits/NameInput'
import EmailInput from './formUnits/EmailInput'
import CountryInput from './formUnits/CountryInput'
import PhoneInput from './formUnits/PhoneInput'
import CurrentPasswordInput from './formUnits/CurrentPasswordInput'
import NewPasswordInput from './formUnits/NewPasswordInput'

const UserEditForm = props => {
    const user = props.user
    const {
        name, email, phone, password_cur, password
    } = props.userEditData
    return (
        <form onSubmit={e => props.handleSubmit(e, props.userEditData)}>
            <NameInput 
            user={user} 
            name={name}
            catchInputData={props.catchInputData}
            errors={props.errors}
            />
            <EmailInput 
            user={user} 
            email={email}
            catchInputData={props.catchInputData}
            errors={props.errors}
            />
            {(user.role !== 'manager') && (
                <CountryInput 
                dbCountries={props.dbCountries}
                user={user} 
                catchInputData={props.catchInputData}
                errors={props.errors}
                />
            )}
            {(user.role !== 'operator') &&
                <PhoneInput 
                user={user} 
                phone={phone}
                catchInputData={props.catchInputData}
                errors={props.errors}
                />
            }
            <CurrentPasswordInput 
            password_cur={password_cur}
            catchInputData={props.catchInputData}
            errors={props.errors}
            />
            <NewPasswordInput
            password={password}
            catchInputData={props.catchInputData}
            errors={props.errors}
            />
            {props.errors.common && (<p className="text-danger">{props.errors.common}</p>)}
            <button type="submit" className="btn btn-success">Update</button>
        </form>
    )
}

export default UserEditForm