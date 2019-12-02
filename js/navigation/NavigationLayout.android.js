import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import AboutScreen from '../screens/About';
import FavsScreen from '../screens/Favs';
import MapScreen from '../screens/Map';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import {colors, typography} from '../config/styles';
const {mediumGrey, white, lightBlack} = colors;
import {sharedNavigationOptions} from './config';
import Icon from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from 'react-navigation-drawer';

const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initalRouteName: 'About',
      title: 'About',
    }),
  },
);

const FavsStack = createStackNavigator(
  {
    Favs: FavsScreen,
    Session: SessionScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initalRouteName: 'Favs',
      title: 'Favs',
    }),
  },
);

const MapStack = createStackNavigator(
  {
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initalRouteName: 'Map',
      title: 'Map',
    }),
  },
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initalRouteName: 'Schedule',
      title: 'Schedule',
    }),
  },
);

ScheduleStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Icon name="md-calendar" size={24} color={tintColor} />
  ),
};
MapStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Icon name="md-map" size={24} color={tintColor} />
  ),
};
FavsStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Icon name="md-heart" size={24} color={tintColor} />
  ),
};
AboutStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Icon name="md-information-circle" size={24} color={tintColor} />
  ),
};

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Favs: FavsStack,
    About: AboutStack,
  },
  {
    tabBarOptions: {
      activeTintColor: white,
      inactiveTintColor: mediumGrey,
      labelStyle: {
        fontSize: 10,
        fontFamily: typography.fontMain,
      },
      tabStyle: {
        backgroundColor: lightBlack,
      },
    },
  },
);
