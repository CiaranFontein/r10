import React from 'react';
import styles from './styles';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';
import RoundButton from '../../components/RoundButton';
import {colors} from '../../config/styles';
const {red} = colors;
import Ionicons from 'react-native-vector-icons/Ionicons';

const Session = ({
  data,
  favIds,
  addFavSession,
  removeFavSession,
  navigation,
}) => {
  const time = moment(data.startTime).format('hh:mm A');
  console.log('favIds\n', favIds);
  const isFav = favIds.includes(data.id);
  return (
    <View>
      <View style={styles.locationFavContainer}>
        <Text style={styles.location}>{data.location}</Text>
        {isFav ? (
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
            style={styles.iconHeart}
            size={24}
            color={red}
          />
        ) : null}
      </View>
      <View style={styles.panel}>
        <Text style={styles.header}>{data.title}</Text>
      </View>
      <View>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View>
        <Text style={styles.description}>{data.description}</Text>
      </View>
      <Text style={styles.presentedBy}>Presented by: </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.push('Speaker', [data.speaker]);
        }}>
        {data.speaker ? (
          <View style={styles.speakerBox}>
            <Image style={styles.avatar} source={{uri: data.speaker.image}} />
            <Text style={styles.speakerName}>{data.speaker.name}</Text>
          </View>
        ) : null}
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TouchableOpacity
        onPress={() => {
          !isFav ? addFavSession(data.id) : removeFavSession(data.id);
        }}>
        <RoundButton>
          {!isFav ? 'Add to Faves' : 'Remove from Faves'}
        </RoundButton>
      </TouchableOpacity>
    </View>
  );
};

export default Session;
