import React from 'react';
import styles from './styles';
import {View, Image, TouchableOpacity, Text, Platform} from 'react-native';
import {colors, typography} from '../../config/styles';
const {white} = colors;
import Ionicons from 'react-native-vector-icons/Ionicons';

const Speaker = ({data, navigation}) => {
  return data ? (
    <View style={styles.blackBackground}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.closeIcon}
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
            size={typography.baseSize * 3}
            color={white}
          />
        </TouchableOpacity>
        <Text style={styles.aboutTheSpeaker}>About the Speaker</Text>
        <Text style={styles.headerBalance}>x</Text>
      </View>
      <View style={styles.panel}>
        <Image style={styles.avatar} source={{uri: data.image}} />
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.description}>{data.bio}</Text>
      </View>
    </View>
  ) : null;
};

export default Speaker;
