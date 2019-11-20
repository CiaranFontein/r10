import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import RootStackNavigator from './navigation/RootStackNavigator';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';
import FavesProvider from './context/FavesContext';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <SafeAreaView style={{flex: 1}}>
            <RootStackNavigator />
          </SafeAreaView>
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
