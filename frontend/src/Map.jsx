import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class MainMap extends Component {

  render() {

    return (
      // GoogleMap must have perameters defaultZoom + defaultCenter
      <GoogleMap
        defaultZoom={14}
        defaultCenter={this.props.center}>
        <Marker
        position={{ lat: 43.6442, lng: -79.4022 }}
        />
      </GoogleMap>

    )
  }
}

// react-google-map uses HOC to work, this export syntax is used at the bottom of the file for the sake of clarity
export default withGoogleMap(MainMap)


// // in the render
// //allows for an empty array instead of returning undefined if no markers found
// const markers = this.props.markers || []
// // in the return
// {markers.map((marker, index) => (
//             <Marker {...marker} />
//             )
//         )}