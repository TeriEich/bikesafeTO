import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class MainMap extends Component {

  render() {
    //allows for an empty array instead of returning undefined if no markers found
    const markers = this.props.markers || []

    return (
      // GoogleMap must have perameters defaultZoom + defaultCenter
      <GoogleMap
        defaultZoom={10}
        defaultCenter={this.props.center}>
        {markers.map((marker, index) => (
            <Marker {...marker} />
            )
        )}

      </GoogleMap>

    )
  }
}

// react-google-map uses HOC to work, this export syntax is used at the bottom of the file for the sake of clarity
export default withGoogleMap(MainMap)