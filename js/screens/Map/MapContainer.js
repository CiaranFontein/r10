import React from 'react';
import Map from './Map';

class MapContainer extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };
  render() {
    return <Map />;
  }
}

export default MapContainer;
