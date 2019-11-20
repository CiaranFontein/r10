import React from 'react';
import Text from 'react-native';
import Map from './Map';
import styles from './styles';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      load: true,
    };
  }

  render() {
    return <Map />;
  }
}

export default MapContainer;
