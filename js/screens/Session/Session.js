import React from 'react';
import styles from './styles';
import {View, Image, Text} from 'react-native';
import moment from 'moment';

const Session = ({
  data,
  favIds,
  addFavSession,
  removeFavSession,
  navigation,
}) => {
  const time = moment(data.startTime).format('hh:mm A');
  const isFav = favIds.includes(data.id);
  return (
    <View>
      <View>
        <Text style={styles.title}>{data.location}</Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.header}>Session Title</Text>
      </View>
      <View>
        <Text>{time}</Text>
      </View>
      <View>
        <Text>{data.description}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Speaker', [data.speaker]);
        }}>
        <View>
          <Image source={{uri: data.speaker.image}} />
          <Text>{data.speaker.name}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          !isFav ? addFavSession(data.id) : removeFavSession(data.id);
        }}>
        <Button>
          {!isFav ? 'Add to Favourites' : 'Remove from Favourites'}
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Session;
