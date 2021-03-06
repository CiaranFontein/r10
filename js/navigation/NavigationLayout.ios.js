import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import AboutScreen from '../screens/About';
import FavsScreen from '../screens/Favs';
import MapScreen from '../screens/Map';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {sharedNavigationOptions} from './config';
import {colors, typography} from '../config/styles';
const {mediumGrey, white, black, tintColor} = colors;

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

export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Favs: FavsStack,
    About: AboutStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Schedule') {
          iconName = 'ios-calendar';
        } else if (routeName === 'Map') {
          iconName = 'ios-map';
        } else if (routeName === 'Favs') {
          iconName = 'ios-heart';
        } else if (routeName === 'About') {
          iconName = 'ios-information-circle';
        }
        return <Ionicons name={iconName} size={24} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: white,
      inactiveTintColor: mediumGrey,
      labelStyle: {
        fontSize: 10,
        fontFamily: typography.fontMain,
      },
      tabStyle: {
        backgroundColor: black,
      },
      style: {
        backgroundColor: black,
      },
    },
  },
);
