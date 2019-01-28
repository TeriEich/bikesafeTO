import React from 'react';
// import axios from 'axios';
import MainMap from './Map';

export default class App extends React.Component {


  render() {
    return (
      <div className="map-container">
        <MainMap
          // googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAJOfXbTHxSPOxeOJgA0c2MFKJ6aMNy5eI&v=3.exp&libraries=geometry,drawing,places`}
          center={{lat: 43.6532, lng: -79.3832}}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          />
      </div>
    );
  }
}