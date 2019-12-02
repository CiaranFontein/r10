import React from 'react';
import {StyleSheet, View, Plattform} from 'react-native';
import {Header} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import {colors, typography} from '../config/styles';
import Icon from 'react-native-vector-icons/Ionicons';
const {white, purple, red} = colors;
const {fontMain} = typography;

const GradientHeader = props => (
  <View style={{backgroundColor: white, overflow: 'hidden'}}>
    <LinearGradient
      colors={[red, purple]}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={[StyleSheet.absoluteFill, {height: 120, width: '100%'}]}
    />
    <Header {...props} />
  </View>
);

const Hamburger = ({navigation}) => (
  <Icon
    name="md-menu"
    color={white}
    size={24}
    onPress={navigation.openDrawer}
    style={{marginLeft: 8}}
  />
);

const BackButton = ({navigation}) => (
  <Icon
    name="md-arrow-back"
    color={white}
    size={24}
    onPress={() => navigation.goBack()}
    style={{marginLeft: 8}}
  />
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  ...Platform.select({
    android: {
      headerLeft:
        navigation.state.routeName === 'Session' ? (
          <BackButton navigation={navigation} />
        ) : (
          <Hamburger navigation={navigation} />
        ),
    },
  }),
  headerTitleStyle: {
    fontFamily: fontMain,
    color: white,
  },
  headerTintColor: white,
});
