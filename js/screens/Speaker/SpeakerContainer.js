import React from 'react';
import Speaker from './Speaker';
import PropTypes from 'prop-types';

class SpeakerContainer extends React.Component {
  static navigationOptions = {
    title: 'Speaker',
  };
  render() {
    const {navigation} = this.props;
    const data = navigation.state.params[0];
    return <Speaker data={data} navigation={navigation} />;
  }
}

SpeakerContainer.propTypes = {
  navigation: PropTypes.object,
};

export default SpeakerContainer;
