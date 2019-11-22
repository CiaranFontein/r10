import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import AboutScreen from '../screens/About';
import FavesScreen from '../screens/Faves';
import MapScreen from '../screens/Map';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, typography} from '../config/styles';
const {mediumGrey, white, lightBlack} = colors;
import {sharedNavigationOptions} from './config';

const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initalRouteName: 'About',
    }),
  },
);

const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initalRouteName: 'Faves',
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
    }),
  },
);

export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
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
        } else if (routeName === 'Faves') {
          iconName = 'ios-heart';
        } else if (routeName === 'About') {
          iconName = 'ios-information-circle';
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
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
        backgroundColor: lightBlack,
      },
    },
  },
);
