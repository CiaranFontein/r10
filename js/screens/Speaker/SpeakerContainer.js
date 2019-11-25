import React from 'react';
import Speaker from './Speaker';

class SpeakerContainer extends React.Component {
  static navigationOptions = {
    title: 'Speaker',
  };
  render() {
    const {navigation} = this.props;
    const data = navigation.state.params[0];
    console.log(data);
    return <Speaker data={data} navigation={navigation} />;
  }
}

export default SpeakerContainer;
