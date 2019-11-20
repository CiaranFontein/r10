import React from 'react';
import Text from 'react-native';
import Speaker from './Speaker';
import styles from './styles';

class SpeakerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      load: true,
    };
  }

  render() {
    return <Speaker />;
  }
}

export default SpeakerContainer;
