import React from 'react';
import styles from './styles';
import {View, Image, Text} from 'react-native';

const Speaker = () => {
  return (
    <View>
      <View>
        <Text style={styles.title}>About the Speaker</Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.header}>Ada Lovelace</Text>
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

export default Speaker;
