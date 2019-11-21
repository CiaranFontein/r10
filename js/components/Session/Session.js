import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Session = ({session}) => {
  return (
    <View style={styles.sessionContainer}>
      <Text style={styles.title}>{session.title}</Text>
      <Text style={styles.location}>{session.location}</Text>
    </View>
  );
};

export default Session;
