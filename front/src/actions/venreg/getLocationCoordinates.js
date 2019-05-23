import { SET_SINGLE_MAP_MARK_COORDINATES } from '../types'
const GOGLE_MAPS_API_KEY = 'AIzaSyBoT8j8K86MPr6lO2JWbrNCVTwLrYcM9ys'

export const getLocationCoordinates = (vendor_data) => dispatch => {

    vendor_data.buisnessLocation.forEach(locationUnit => {
        const city = locationUnit.city
        const street = locationUnit.street
        const objNumber = locationUnit.objNumber

        const location = `${city} ${street} ${objNumber}`
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${GOGLE_MAPS_API_KEY}&sensor=true`, {
            method: 'GET',
        })
        .then(data => {
            data.json()
            .then(locData => {
                const location = locData.results[0].geometry.location
                dispatch(saveCoordinatesInVenReg(location))
            })
        })
        .catch(err => {
            console.log(err)
        })
    })
} 

export const saveCoordinatesInVenReg = data => {
    return {
        type: SET_SINGLE_MAP_MARK_COORDINATES,
        locationData: data
    }
}