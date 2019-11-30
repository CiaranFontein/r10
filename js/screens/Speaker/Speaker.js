import React from 'react';
import styles from './styles';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Platform,
  ScrollView,
  Linking,
} from 'react-native';
import RoundButton from '../../components/RoundButton';
import {colors, typography} from '../../config/styles';
const {white} = colors;
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const Speaker = ({data, navigation}) => {
  return data ? (
    <ScrollView style={styles.blackBackground}>
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
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(data.url);
          }}>
          <RoundButton>Read More on Wikipedia</RoundButton>
        </TouchableOpacity>
      </View>
    </ScrollView>
  ) : null;
};

Speaker.propTypes = {
  info: PropTypes.shape({
    bio: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    session: PropTypes.object,
    url: PropTypes.string,
  }),
};

export default Speaker;
