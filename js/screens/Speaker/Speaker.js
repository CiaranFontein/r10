import React from 'react';
import styles from './styles';
import {View, Image, TouchableOpacity, Text, Platform} from 'react-native';
import {colors} from '../../config/styles';
const {white} = colors;
import Ionicons from 'react-native-vector-icons/Ionicons';

const Speaker = ({data, navigation}) => {
  console.log(data);
  return data ? (
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
        <Text style={styles.title}>{data.name}</Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.header}>{data.bio}</Text>
      </View>
      <View>
        <Image height="100" width="100" source={{uri: data.image}} />
      </View>
    </View>
  ) : null;
};

export default Speaker;
