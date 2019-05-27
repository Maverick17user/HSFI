import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import {catchInputData} from '../../../../actions/vendorStaf/catchInputData'

import CurentValue from '../../../common/CurentValue'

const VendorProfileEdit = props => {
    const {dbVendors} = props.dbVendors
    const {dbCountries} = props.dbCountries
    const {dbFoodGroups} = props.dbFoodGroups
    const errors = props.errors
    const vendorData = dbVendors.find(vendor => vendor._id === props.match.params.vendorId)    

    const handleSubmit = (e, vendorEditData) => {
        e.preventDefault()
        console.log(vendorEditData);
    }
    
    if (vendorData) {
        return (
            <div className="container vProfile">
                <h3 className="venProfile-h3">Vendor profile edit</h3>
                <form onSubmit={e => handleSubmit(e, props.vendorEditData)}>
                    <div className="form-group">
                        <label>
                            Country
                            {vendorData.country.map((unit,i) => {
                                return unit.country.map(countryName => (
                                    <CurentValue key={countryName+1} text={countryName} />
                                ))
                            })}
                        </label>
                        <select 
                        multiple
                        name="country" 
                        onChange={(e) => catchInputData(e)} 
                        id="country"
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.country,
                        })}>
                            {dbCountries.map((countryName, id) => {
                                return <option key={id.toString()} value={countryName}>{countryName}</option>
                            })}
                        </select>
                        {errors.country && (<div className="invalid-feedback">{errors.country}</div>)} 
                    </div>
                    <div className="form-group">
                        <label>
                            Name <CurentValue text={vendorData.venName} />
                        </label>
                        <input
                        onChange={(e) => catchInputData(e)}
                        // value={name}
                        placeholder="Type in a new name"
                        type="text" 
                        name="venName" 
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.venName
                        })}/>
                        {errors.venName && (<div className="invalid-feedback">{errors.venName}</div>)}
                    </div>
                    <div className="form-group">
                        <p className="text-warning">Photo change</p>
                    </div>
                    <div className="form-group">
                        <label>
                            License number <CurentValue text={vendorData.licNumber} />
                        </label>
                        <input
                        onChange={(e) => catchInputData(e)}
                        // value={name}
                        placeholder="Type in a new license number"
                        type="text" 
                        name="licNumber" 
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.licNumber
                        })}/>
                        {errors.licNumber && (<div className="invalid-feedback">{errors.licNumber}</div>)}
                    </div>
                    <div className="form-group">
                        <label>
                            Phone 
                            {
                                (vendorData.phone)
                                ? <CurentValue text={vendorData.phone} />
                                :  null
                            }
                        </label>
                        <input
                        onChange={(e) => catchInputData(e)}
                        // value={name}
                        placeholder="Type in a new phone number"
                        type="text" 
                        name="phone" 
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.phone
                        })}/>
                        {errors.phone && (<div className="invalid-feedback">{errors.phone}</div>)}
                    </div>
                    <div className="form-group">
                        <label>
                            Email <CurentValue text={vendorData.email} />
                        </label>
                        <input
                        onChange={(e) => catchInputData(e)}
                        // value={name}
                        placeholder="Type in an new email"
                        type="text" 
                        name="email" 
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.email
                        })}/>
                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                    </div>
                    <div className="form-group">
                        <p className="text-warning">Location change</p>
                    </div>
                    <div className="form-group">
                        <p className="text-warning">Shedule change</p>
                    </div>
                    <div className="form-group">
                        <label>
                            Food group <CurentValue text={vendorData.foodGroup} />
                        </label>
                        <select 
                        name="foodGroup" 
                        onChange={(e) => catchInputData(e)} 
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.foodGroup,
                        })}>
                            {dbFoodGroups.map(group =>
                                <option key={group+1} value={group}>{group}</option>
                            )}
                        </select>
                        {errors.country && (<div className="invalid-feedback">{errors.country}</div>)} 
                    </div>
                    <div className="form-group">
                        <label>
                            Ingredient source
                            {vendorData.ingredientSource.map((unit,i) => {
                                return <CurentValue key={unit.source+1} text={unit.source} />
                            })}
                        </label>
                        <p className="text-warning">Ingredient source edit</p>
                        <input
                        onChange={(e) => catchInputData(e)}
                        // value={name}
                        placeholder="Type in an new ingredient source"
                        type="text" 
                        name="ingredientSource" 
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.ingredientSource
                        })}/>
                        {errors.ingredientSource && (<div className="invalid-feedback">{errors.ingredientSource}</div>)}
                    </div>
                </form>
            </div>
        )
    } else {
        return (
            <p>Loading ...</p>
        )
    }
}

const mapStateToProps = (state) => ({
    dbVendors: state.dbVendors,
    dbCountries: state.dbCountries,
    errors: state.errors,
    dbFoodGroups: state.dbFoodGroups
})

export default connect(mapStateToProps, {
    catchInputData
})(VendorProfileEdit)