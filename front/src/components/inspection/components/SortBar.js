import React from 'react'
import { connect } from 'react-redux';
import {
    SORT_BY_ALL_VENDORS,
    SORT_BY_COUNTRIES_VENDORS,
    SORT_BY_ISOPEN_VENDORS,
} from '../../../actions/types'

const SortBar = props => {
    const {dbCountries} = props.dbCountries 
    const {dbFoodGroups} = props.dbFoodGroups
    const dbVendors = props.dbVendors

    return (
        <div className="col-3">
            <div className="tableSort-wrap">
                <p className="text-info">Tabel sort form</p>
                <div className="tableSort">
                    <form action="">
                        <div className="form-group">
                            <button type="button" 
                            className="btn btn-outline-primary btn-sm"
                            onClick={() => props.sortBy_ALL(dbVendors)}>
                                All vendors
                            </button>
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <select multiple className="selectpicker form-control" id="country"
                            onChange={e => props.sortBy_Countries(e, dbVendors)}>
                                {dbCountries.map(country =>
                                    <option key={country+1} value={country}>{country}</option>
                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <select multiple className="selectpicker form-control" id="city">
                                <option value="">Oslo</option>
                                <option value="">Bergen</option>
                                <option value="">Tromso</option>
                                <option value="">Tronheim</option>
                                <option value="">Sandefjord</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="status_o/c">Open / Closed</label>
                            <select className="selectpicker form-control" id="status_o/c" title="Nothing selected" 
                            onChange={e => props.sortBy_isOpen(e, dbVendors)} defaultValue={'DEFAULT'}>
                                <option value={"DEFAULT"} disabled>Choose status ...</option>
                                <option value={"Open"}>Open</option>
                                <option value={"Closed"}>Closed</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="f_group">Food group</label>
                            <select multiple className="selectpicker form-control" id="f_group">
                                {dbFoodGroups.map(group =>
                                    <option key={group+1} value={group}>{group}</option>
                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="oss">OSS</label>
                            <select className="selectpicker form-control" id="oss/c" title="OSS value">
                                <option value="> 0">{"> 0"}</option>
                                <option value="< 0">{"< 0"}</option>
                                <option value="0">{"0"}</option>
                                <option value="-">{"-"}</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="flag">Flag</label>
                            <select className="selectpicker form-control" id="flag" title="Nothing selected">
                                <option value="">Yes (red flag)</option>
                                <option value="">No (green flag)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="stars">Stars</label>
                            <input type="number" id="oss" className="form-control" placeholder="0" min="0" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    dbCountries: state.dbCountries,
    dbFoodGroups: state.dbFoodGroups,
})

const mapDispatchToProps = dispatch => {
    return {
        sortBy_isOpen: (e, dbVendors) => {
            dispatch({ 
                type: SORT_BY_ISOPEN_VENDORS,
                payload: {
                    isOpen: e.target.value,
                    allVens: dbVendors,
                }
            })
        },

        sortBy_ALL: (dbVendors) => {
            dispatch({ 
                type: SORT_BY_ALL_VENDORS,
                all: dbVendors
            })
        },

        sortBy_Countries: (e, dbVendors) => {
            dispatch({ 
                type: SORT_BY_COUNTRIES_VENDORS,
                payload: {
                    selectedValues: [...e.target.selectedOptions].map(o => o.value),
                    allVens: dbVendors,
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortBar)