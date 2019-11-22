import React from 'react';
import Speaker from './Speaker';

class SpeakerContainer extends React.Component {
  render() {
    const {navigation} = this.props;
    const data = navigation.state.params[0];
    return <Speaker data={data} navigation={navigation} />;
  }
}

export default SpeakerContainer;
