import React from 'react';
// import axios from 'axios';
import MainMap from './Map';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      markers:    [
        {
            "id": 1,
            "name": "Eaton Centre",
            "latitude": "43.6544",
            "longitude": "-79.3807"
        },
        {
            "id": 2,
            "name": "City Hall",
            "latitude": "43.6534",
            "longitude": "-79.3841"
        },
        {
            "id": 3,
            "name": "Trinity Bellwoods Park",
            "latitude": "43.6500",
            "longitude": "-79.4169"
        }
      ]
    }
  }

  render() {
    return (
      <div className="map-container">
        <MainMap
          // googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAJOfXbTHxSPOxeOJgA0c2MFKJ6aMNy5eI&v=3.exp&libraries=geometry,drawing,places`}
          markers = {this.state.markers}
          center={{lat: 43.6532, lng: -79.3832}}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          />
      </div>
    );
  }
}