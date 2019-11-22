import React from 'react';
import styles from './styles';
import {View, Image, TouchableOpacity, Text, Platform} from 'react-native';
import {colors} from '../../config/styles';
const {white} = colors;

const Speaker = ({data, navigation}) => {
  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
            size={32}
            color={white}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>d</Text>
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
