import React from 'react';
import styles from './styles';
import {View, Image, Text} from 'react-native';

const Session = () => {
  return (
    <View>
      <View>
        <Text style={styles.title}>About the Session</Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.header}>Session Title</Text>
      </View>
      <View>
        <Text>
          Augusta Ada King-Noel, Countess of Lovelace is an English
          Mathematician and writer, chiefly known for her work on Charles
          Babbage's early mechanical general-purpose computer, the Analytical
          Engine
        </Text>
      </View>
    </View>
  );
};

export default Session;
