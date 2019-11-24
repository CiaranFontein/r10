import React, {Component} from 'react';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../config/styles';
const {purple, blue} = colors;

const RoundButton = props => (
  <LinearGradient
    {...props}
    colors={[purple, blue]}
    start={{x: 0.0, y: 1.0}}
    end={{x: 1.0, y: 0.0}}
    style={styles.button}>
    <Text accessibilityRole="button" style={styles.buttonText}>
      {props.children}
    </Text>
  </LinearGradient>
);

export default RoundButton;
