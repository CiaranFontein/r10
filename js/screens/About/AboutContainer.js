import React from 'react';
import Text from 'react-native';
import About from './About';
import styles from './styles';

class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      load: true,
    };
  }

  render() {
    return <About />;
  }
}

export default AboutContainer;
