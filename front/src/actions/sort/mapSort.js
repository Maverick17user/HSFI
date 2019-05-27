import {
    SORT_BY_COUNTRIES_VENDORS_MAP,
    SORT_BY_CITIES_VENDORS_MAP,
} from '../../actions/types'

export const sortBy_Countries_Markers = (e, dbVendors) => dispatch => {
    dispatch({ 
        type: SORT_BY_COUNTRIES_VENDORS_MAP,
        payload: {
            selectedValues: [...e.target.selectedOptions].map(o => o.value),
            allVens: dbVendors,
        }
    })
}

export const sortBy_Cities_Markers = (e, dbVendors) => dispatch => {
    dispatch({ 
        type: SORT_BY_CITIES_VENDORS_MAP,
        payload: {
            cityName: e.target.value,
            allVens: dbVendors,
        }
    })
}