import React from 'react'
import { connect } from 'react-redux';
import {
    SORT_BY_ALL_VENDORS,
    SORT_BY_COUNTRIES_VENDORS,
    SORT_BY_CITIES_VENDORS,
    SORT_BY_ISOPEN_VENDORS,
    SORT_BY_FOODGROUP_VENDORS,
    SORT_BY_OSS_VENDORS,
    SORT_BY_FLAG_VENDORS,
    SORT_BY_STARS_VENDORS
} from '../../../actions/types'

const SortBar = props => {
    const {dbCountries} = props.dbCountries 
    const {dbFoodGroups} = props.dbFoodGroups
    const dbVendors = props.dbVendors

    return (
        <div className="col-3">
            <div className="tableSort-wrap">
                <p className="text-info">Tabel sort form (single)</p>
                <div className="tableSort">
                    <form>
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
                            {/* TODO: Refactoring for this select... */}
                            <select multiple className="selectpicker form-control" id="city"
                            onChange={e => props.sortBy_Cities(e, dbVendors)}>
                                <option value="Gomel">Gomel</option>
                                <option value="Minsk">Minsk</option>
                                <option value="Oslo">Oslo</option>
                                <option value="Berlin">Berlin</option>
                                <option value="Druskinenkai">Druskinenkai</option>
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
                            <select multiple className="selectpicker form-control" id="f_group"
                            onChange={e => props.sortBy_foogGroup(e, dbVendors)}>
                                {dbFoodGroups.map(group =>
                                    <option key={group+1} value={group}>{group}</option>
                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="oss">OSS</label>
                            <select className="selectpicker form-control" id="oss/c" title="OSS value"
                            onChange={e => props.sortBy_oss(e, dbVendors)} defaultValue={'DEFAULT'}>
                                <option value={"DEFAULT"} disabled>Choose OSS marker ...</option>
                                <option value="> 0">{"> 0"}</option>
                                <option value="< 0">{"< 0"}</option>
                                <option value="0">{"0"}</option>
                                <option value="-">{"-"}</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="flag">Flag</label>
                            <select className="selectpicker form-control" id="flag" title="Nothing selected"
                            onChange={e => props.sortBy_flag(e, dbVendors)} defaultValue={'DEFAULT'}>
                                <option value={"DEFAULT"} disabled>Choose flag marker ...</option>
                                <option value="red flagged">Yes (red flag)</option>
                                <option value="other flag">No (green flag)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="stars">Stars</label>
                            <input type="number" id="oss" className="form-control" placeholder="0" min="0" 
                            onBlur={e => props.sortBy_stars(e, dbVendors)} />
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
        sortBy_ALL: (dbVendors) => {
            dispatch({ 
                type: SORT_BY_ALL_VENDORS,
                allVens: dbVendors,
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
        },

        sortBy_Cities: (e, dbVendors) => {
            dispatch({ 
                type: SORT_BY_CITIES_VENDORS,
                payload: {
                    selectedValues: [...e.target.selectedOptions].map(o => o.value),
                    allVens: dbVendors,
                }
            })
        },

        sortBy_isOpen: (e, dbVendors) => {
            dispatch({ 
                type: SORT_BY_ISOPEN_VENDORS,
                payload: {
                    isOpen: e.target.value,
                    allVens: dbVendors,
                }
            })
        },

        sortBy_foogGroup: (e, dbVendors) => {
            dispatch({ 
                type: SORT_BY_FOODGROUP_VENDORS,
                payload: {
                    selectedValues: [...e.target.selectedOptions].map(o => o.value),
                    allVens: dbVendors,
                }
            })
        },

        sortBy_oss: (e, dbVendors) => {
            dispatch({ 
                type: SORT_BY_OSS_VENDORS,
                payload: {
                    ossMarker: e.target.value,
                    allVens: dbVendors,
                }
            })
        },

        sortBy_flag: (e, dbVendors) => {
            dispatch({ 
                type: SORT_BY_FLAG_VENDORS,
                payload: {
                    flagMarker: e.target.value,
                    allVens: dbVendors,
                }
            })
        },

        sortBy_stars: (e, dbVendors) => {
            dispatch({ 
                type: SORT_BY_STARS_VENDORS,
                payload: {
                    starsCount: e.target.value,
                    allVens: dbVendors,
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortBar)