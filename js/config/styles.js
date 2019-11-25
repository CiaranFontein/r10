import {Platform} from 'react-native';

export const colors = {
  black: '#000000',
  nearBlack: '#111111',
  lightBlack: '#888',
  mediumGrey: '#999',
  lightGrey: '#e6e6e6',
  blue: '#8797D6',
  purple: '#9963ea',
  red: '#cf392a',
  offWhite: '#f1f1f1',
  white: '#ffffff',
  tintColor: '#aaa',
  lightPurple: '#9b73f0',
  transluscentGrey: 'rgba(0,0,0,0.4)',
  transluscentWhite: 'rgba(255,255,255,0.8)',
};

export const typography = {
  subHeader: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: '#999',
  },
  baseSize: 16,
  fontMainLight: 'Montserrat-Light',
  ...Platform.select({
    ios: {
      fontMain: 'Montserrat',
    },
    android: {
      fontMain: 'Montserrat-Regular',
    },
  }),
};
