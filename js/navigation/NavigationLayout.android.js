import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import AboutScreen from '../screens/About';
import FavsScreen from '../screens/Favs';
import MapScreen from '../screens/Map';
import ScheduleScreen from '../screens/Schedule';
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

const FavsStack = createStackNavigator(
  {
    Favs: FavsScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initalRouteName: 'Favs',
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
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initalRouteName: 'Schedule',
    }),
  },
);

export default createDrawerNavigator(
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
          iconName = 'md-calendar';
        } else if (routeName === 'Map') {
          iconName = 'md-map';
        } else if (routeName === 'Favs') {
          iconName = 'md-heart';
        } else if (routeName === 'About') {
          iconName = 'md-information-circle';
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
