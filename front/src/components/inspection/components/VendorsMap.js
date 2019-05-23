import React from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

// TODO: put API_KEY into .env?
const GOGLE_MAPS_API_KEY = 'AIzaSyBoT8j8K86MPr6lO2JWbrNCVTwLrYcM9ys'

const VendorsMap = compose(
    withProps({
        googleMapURL:
        `https://maps.googleapis.com/maps/api/js?key=${GOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%`, weight: `100%` }} />,
        containerElement: <div style={{ height: `100%`, weight: `100%` }}></div>,
        mapElement: <div style={{ height: `100%`, weight: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => {
    return (
        <>
            <GoogleMap defaultZoom={1} defaultCenter={{ lat: 0, lng: 0 }}>
                {props.isMarkerShown &&
                    props.sortedVens.map(ven => {
                        console.log(ven.gps);
                        
                        // return ven.gps.map((cordinates, index) => {
                        //     return (
                        //         <Marker
                        //         key={ven.name + index}
                        //         position={{
                        //             lat: cordinates.lat,
                        //             lng: cordinates.lng
                        //         }}>
                        //         </Marker>
                        //     )
                        // })
                    })
                }
            </GoogleMap>
        </>
    )
});

export default VendorsMap
