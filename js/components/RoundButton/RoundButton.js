import React, {Component} from 'react';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../config/styles';
const {purple, blue} = colors;
import styles from './styles';
import PropTypes from 'prop-types';

const RoundButton = props => {
  const {children} = props;
  console.log(children);
  return (
    <LinearGradient
      {...props}
      colors={[purple, blue]}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={styles.button}>
      <Text accessibilityRole="button" style={styles.buttonText}>
        {children}
      </Text>
    </LinearGradient>
  );
};

RoundButton.propTypes = {
  children: PropTypes.string,
};

export default RoundButton;
