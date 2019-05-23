import axios from 'axios';
import { GET_ERRORS } from '../types';
const GOGLE_MAPS_API_KEY = 'AIzaSyBoT8j8K86MPr6lO2JWbrNCVTwLrYcM9ys'

export function submitVenRegForm(newVendor) {
    const cordinates = []

    getCoordinates(newVendor)
    .then(cordUnit => {
        cordinates.push(cordUnit)
    })

    const updatedNewVendor = newVendor.gps.push(...cordinates)
    registrateNewWendor(updatedNewVendor)
}

const getCoordinates = (newVendor) => {
    return Promise((resolve, reject) => {
        newVendor.buisnessLocation.forEach(locationUnit => {
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
                    resolve(location)
                })
            })
            .catch(err => {
                console.log(err)
            })
        })
    })
}

const registrateNewWendor = (newVendorData) => dispatch => {
    axios.post('/api/vendors/venRegistration', newVendorData)
    .then(res => {
        console.log('Vendor added successfully');
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    });
} 