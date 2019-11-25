import React from 'react';
import styles from './styles';
import {Image} from 'react-native';

const Map = () => {
  return (
    <Image style={styles.map} source={require('../../assets/images/map.png')} />
  );
};

export default Map;
