import React, {Component} from 'react';
import RootStackNavigator from './navigation/RootStackNavigator';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';
import FavsProvider from './context/FavsContext';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavsProvider>
          <RootStackNavigator />
        </FavsProvider>
      </ApolloProvider>
    );
  }
}
