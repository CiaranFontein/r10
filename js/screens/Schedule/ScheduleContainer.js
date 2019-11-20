import React from 'react';
import Text from 'react-native';
import Schedule from './Schedule';
import styles from './styles';

class ScheduleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      load: true,
    };
  }

  render() {
    return <Schedule />;
  }
}

export default ScheduleContainer;
