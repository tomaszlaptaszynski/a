import React from 'react';

import './MapContainer.css';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapContainer = (props) => {

    const style = {
        width: '100%',
        height: '200px'
    }

    // TODO nie kasować
    // https://www.npmjs.com/package/google-maps-react
    // https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/

    return (
        <div>
            {props.coordsX} {props.coordsY}
            <Map
                google={props.google}
                zoom={14}
                style={style}
                initialCenter={{
                    lat: props.coordsX,
                    lng: props.coordsY
                }}
            >
            </Map>
        </div>
    )
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDEJZs-NuSBckeZOFNHSFTJN4em4tLpWG4")
})(MapContainer)
