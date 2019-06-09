import { GET_DB_VENDORS, SORT_BY_ALL_VENDORS } from '../types'

export const fetchVendorsByRole = (options, user, flag) => dispatch => {
    fetch('/api/vendors/getAllVendors', options)
    .then(resp => resp.json())
        .then(data => {
            if(user.role === 'manager') {
                if(flag === 'sortBar') {
                    dispatch({
                        type: SORT_BY_ALL_VENDORS,
                        allVens: data
                    })
                } 
                else {
                    dispatch({
                        type: GET_DB_VENDORS,
                        payload: data
                    })
                }
            } 
            else {
                const sortedVendorsByCountry = data.filter(ven => {
                    const venCountryList = ven.country[0].country
                    return venCountryList.every(country => country === user.country) === true 
                })

                if(flag === 'sortBar') {
                    dispatch({
                        type: SORT_BY_ALL_VENDORS,
                        allVens: sortedVendorsByCountry
                    })
                } 
                else {
                    dispatch({
                        type: GET_DB_VENDORS,
                        payload: sortedVendorsByCountry
                    })
                }
            }
        })
        .catch(err => console.log(err))
    .catch(err => console.log(err))
}