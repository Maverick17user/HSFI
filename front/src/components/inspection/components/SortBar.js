import React from 'react'
import { connect } from 'react-redux';
import {
    sortBy_ALL,
    sortBy_Countries,
    sortBy_Cities,
    sortBy_isOpen,
    sortBy_foogGroup,
    sortBy_oss,
    sortBy_flag,
    sortBy_stars
} from '../../../actions/sort/tableSort'
import {
    sortBy_Countries_Markers,
    sortBy_Cities_Markers
} from '../../../actions/sort/mapSort'

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
                            onChange={e => {
                                (props.history.location.pathname === '/inspection/table')
                                ? props.sortBy_Countries(e, dbVendors)
                                : props.sortBy_Countries_Markers(e, dbVendors)
                            }}>
                                {dbCountries.map(country =>
                                    <option key={country+1} value={country}>{country}</option>
                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" className="form-control" placeholder="Type in city name" 
                            onBlur={e => {
                                (props.history.location.pathname === '/inspection/table')
                                ? props.sortBy_Cities(e, dbVendors)
                                : props.sortBy_Cities_Markers(e, dbVendors)
                            }}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="status_o/c">Open / Closed</label>
                            <select className="selectpicker form-control" id="status_o/c" title="Nothing selected" 
                            onChange={e => {props.sortBy_isOpen(e, dbVendors)}}>
                                <option value={"DEFAULT"} disabled>Choose status ...</option>
                                <option value={"Open"}>Open</option>
                                <option value={"Closed"}>Closed</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="f_group">Food group</label>
                            <select multiple className="selectpicker form-control" id="f_group"
                            onChange={e => {props.sortBy_foogGroup(e, dbVendors) }}>
                                {dbFoodGroups.map(group =>
                                    <option key={group+1} value={group}>{group}</option>
                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="oss">OSS</label>
                            <select className="selectpicker form-control" id="oss/c" title="OSS value"
                            onChange={e => {props.sortBy_oss(e, dbVendors)}}
                            defaultValue={'DEFAULT'}>
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
                            onChange={e => {props.sortBy_flag(e, dbVendors)}}
                            defaultValue={'DEFAULT'}>
                                <option value={"DEFAULT"} disabled>Choose flag marker ...</option>
                                <option value="red flagged">Yes (red flag)</option>
                                <option value="no red flag">No (green flag)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="stars">Stars</label>
                            <input type="number" id="oss" className="form-control" placeholder="0" min="0" 
                            onBlur={e => {props.sortBy_stars(e, dbVendors)}} />
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

export default connect(mapStateToProps, {
    // For table sort only
    sortBy_Countries,
    sortBy_Cities,
    //Only for map
    sortBy_Countries_Markers,
    sortBy_Cities_Markers,
    // Common for table and map
    sortBy_ALL,
    sortBy_isOpen,
    sortBy_foogGroup,
    sortBy_oss,
    sortBy_flag,
    sortBy_stars,
})(SortBar)