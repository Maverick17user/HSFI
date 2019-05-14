import React from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const VendorsMap = compose(
    withProps({
        googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBoT8j8K86MPr6lO2JWbrNCVTwLrYcM9ys&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%`, weight: `100%` }} />,
        containerElement: <div style={{ height: `100%`, weight: `100%` }}></div>,
        mapElement: <div style={{ height: `100%`, weight: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <>
        <GoogleMap defaultZoom={1} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
            {props.isMarkerShown && (
                <Marker position={{ lat: -34.397, lng: 150.644 }} />
            )}
        </GoogleMap>
    </>
));

export default VendorsMap
    // ReactDOM.render(<VendorsMap isMarkerShown />, document.getElementById("root"));
