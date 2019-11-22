import React from 'react';
import Session from './Session';
import styles from './styles';

class SessionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      load: true,
    };
  }

  render() {
    return <Session />;
  }
}

export default SessionContainer;
