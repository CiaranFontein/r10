import React, {Component} from 'react';
import {Text} from 'react-native';
import About from './About';
import {Query} from 'react-apollo';
import {QUERY_CONDUCTS} from '../../config/api';
import Loader from '../../components/Loader';

class AboutContainer extends Component {
  render() {
    return (
      <Query query={QUERY_CONDUCTS}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error: {error}</Text>;
          if (data) {
            return <About data={data} />;
          }
        }}
      </Query>
    );
  }
}

export default AboutContainer;
