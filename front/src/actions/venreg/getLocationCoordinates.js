import { SET_SINGLE_MAP_MARK_COORDINATES } from '../types'
const GOGLE_MAPS_API_KEY = 'AIzaSyBoT8j8K86MPr6lO2JWbrNCVTwLrYcM9ys'

export const getLocationCoordinates = (city, street, objNumber, index) => dispatch => {
   
    const venLocation = `${city} ${street} ${objNumber}`
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${venLocation}&key=${GOGLE_MAPS_API_KEY}&sensor=true`, {
        method: 'GET',
    })
    .then(data => {
        data.json()
        .then(locData => {
            const locationCordinates = locData.results[0].geometry.location
            dispatch(saveCoordinatesInVenReg(Object.assign({}, locationCordinates, {id: index})))
        })
    })
    .catch(err => {
        console.log(err)
    })

} 

export const saveCoordinatesInVenReg = data => {
    return {
        type: SET_SINGLE_MAP_MARK_COORDINATES,
        locationData: data,
    }
}