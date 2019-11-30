import React, {Component} from 'react';
import {QUERY_ALL_SESSIONS} from '../../config/api';
import {Query} from 'react-apollo';
import Favs from './Favs';
import {Text} from 'react-native';
import {formatSessionData} from '../../lib/dataFormatHelper';
import {FavsContext} from '../../context/FavsContext';
import Loader from '../../components/Loader';
import PropTypes from 'prop-types';

class FavsContainer extends Component {
  static navigationOptions = {
    title: 'Favourites',
  };
  render() {
    const {navigation} = this.props;
    return (
      <FavsContext.Consumer>
        {({favIds}) => (
          <Query query={QUERY_ALL_SESSIONS}>
            {({loading, error, data}) => {
              if (loading) return <Loader />;
              if (error) return <Text>Error: {error}</Text>;
              let filteredData = data.allSessions.filter(session =>
                favIds.includes(session.id),
              );
              const formattedData = formatSessionData(filteredData);
              console.log(formattedData);
              return <Favs navigation={navigation} data={formattedData} />;
            }}
          </Query>
        )}
      </FavsContext.Consumer>
    );
  }
}

FavsContainer.propTypes = {
  navigation: PropTypes.object,
};

export default FavsContainer;
