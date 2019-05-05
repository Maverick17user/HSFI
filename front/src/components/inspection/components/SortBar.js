import React from 'react'
import { connect } from 'react-redux';

const SortBar = props => {
    const {dbCountries} = props.dbCountries 
    const {dbFoodGroups} = props.dbFoodGroups

    return (
        <div className="col-3">
            <div className="tableSort-wrap">
                <p className="text-info">Tabel sort form</p>
                <div className="tableSort">
                    <form action="">
                        <div className="form-group">
                            <button type="button" className="btn btn-outline-primary btn-sm">
                                All vendors
                            </button>
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <select multiple className="selectpicker form-control" required id="country">
                                {dbCountries.map(country =>
                                    <option key={country+1} value={country}>{country}</option>
                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <select multiple className="selectpicker form-control" required id="city">
                                <option value="">Oslo</option>
                                <option value="">Bergen</option>
                                <option value="">Tromso</option>
                                <option value="">Tronheim</option>
                                <option value="">Sandefjord</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="status_o/c">Open / Closed</label>
                            <select className="selectpicker form-control" required id="status_o/c" title="Nothing selected">
                                <option value="Open">Open</option>
                                <option value="Closed">Closed</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="f_group">Food group</label>
                            <select multiple className="selectpicker form-control" required id="f_group">
                                {dbFoodGroups.map(group =>
                                    <option key={group+1} value={group}>{group}</option>
                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="oss">OSS</label>
                            <select className="selectpicker form-control" required id="oss/c" title="OSS value">
                                <option value="> 0">{"> 0"}</option>
                                <option value="< 0">{"< 0"}</option>
                                <option value="0">{"0"}</option>
                                <option value="-">{"-"}</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="flag">Flag</label>
                            <select className="selectpicker form-control" required id="flag" title="Nothing selected">
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

export default connect(mapStateToProps)(SortBar)