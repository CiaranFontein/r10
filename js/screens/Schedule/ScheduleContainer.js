import React, {Component} from 'react';
import Schedule from './Schedule';
import {QUERY_ALL_SESSIONS} from '../../config/api';
import {Query} from 'react-apollo';
import Loader from '../../components/Loader';
import {View, Text} from 'react-native';
import {formatSessionData} from '../../lib/dataFormatHelper';

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      load: true,
    };
  }

  render() {
    const {navigation} = this.props;

    return (
      <Query query={QUERY_ALL_SESSIONS}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error: {error}</Text>;
          if (data) {
            const formattedData = formatSessionData(data.allSessions);
            return <Schedule navigation={navigation} data={formattedData} />;
          }
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
