import {
    SORT_BY_ALL_VENDORS,
    SORT_BY_COUNTRIES_VENDORS,
    SORT_BY_CITIES_VENDORS,
    SORT_BY_ISOPEN_VENDORS,
    SORT_BY_FOODGROUP_VENDORS,
    SORT_BY_OSS_VENDORS,
    SORT_BY_FLAG_VENDORS,
    SORT_BY_STARS_VENDORS
} from '../../actions/types'

export const sortBy_ALL = dbVendors => dispatch => {
    dispatch({ 
        type: SORT_BY_ALL_VENDORS,
        allVens: dbVendors,
    })
}

export const sortBy_Countries = (e, dbVendors) => dispatch => {
    dispatch({ 
        type: SORT_BY_COUNTRIES_VENDORS,
        payload: {
            selectedValues: [...e.target.selectedOptions].map(o => o.value),
            allVens: dbVendors,
        }
    })
}

export const sortBy_Cities = (e, dbVendors) => dispatch => {
    dispatch({ 
        type: SORT_BY_CITIES_VENDORS,
        payload: {
            cityName: e.target.value,
            allVens: dbVendors,
        }
    })
}

export const sortBy_isOpen = (e, dbVendors) => dispatch => {
    dispatch({ 
        type: SORT_BY_ISOPEN_VENDORS,
        payload: {
            isOpen: e.target.value,
            allVens: dbVendors,
        }
    })
}

export const sortBy_foogGroup = (e, dbVendors) => dispatch => {
    dispatch({ 
        type: SORT_BY_FOODGROUP_VENDORS,
        payload: {
            selectedValues: [...e.target.selectedOptions].map(o => o.value),
            allVens: dbVendors,
        }
    })
}

export const sortBy_oss = (e, dbVendors) => dispatch => {
    dispatch({ 
        type: SORT_BY_OSS_VENDORS,
        payload: {
            ossMarker: e.target.value,
            allVens: dbVendors,
        }
    })
}

export const sortBy_flag = (e, dbVendors) => dispatch => {
    dispatch({ 
        type: SORT_BY_FLAG_VENDORS,
        payload: {
            flagMarker: e.target.value,
            allVens: dbVendors,
        }
    })
}

export const sortBy_stars = (e, dbVendors) => dispatch => {
    dispatch({ 
        type: SORT_BY_STARS_VENDORS,
        payload: {
            starsCount: e.target.value,
            allVens: dbVendors,
        }
    })
}