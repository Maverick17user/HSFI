import { GET_DB_FOODGROUPES } from '../types'

export const fetchFoodGroups = options => dispatch => {
    fetch('/api/foodGroups/redactPanel/foodGroups', options)
    .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: GET_DB_FOODGROUPES,
                payload: data
            })
        })
        .catch(err => console.log(err))
}