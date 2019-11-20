import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import RootStackNavigator from './navigation/RootStackNavigator';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <RootStackNavigator />
      </SafeAreaView>
    );
  }
}
