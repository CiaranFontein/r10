import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import RootStackNavigator from './navigation/RootStackNavigator';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <SafeAreaView style={{flex: 1}}>
          <RootStackNavigator />
        </SafeAreaView>
      </ApolloProvider>
    );
  }
}
