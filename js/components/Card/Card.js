import React from 'react';
import {Text, View, Image, Button} from 'react-native';
import styles from './styles';

const Card = ({item}) => (
  <View>
    <Image
      style={styles.image}
      source={{
        uri:
          'https://media.pitchfork.com/photos/5b7d837fa78458227bd77ff0/2:1/w_790/Aerosmith.jpg',
      }}
    />
    
    <View style={styles.view}>
      <Text>Artist: {item.artistName}</Text>
      <Text>Track: {item.trackName}</Text>
      <Text>Track Price: {item.trackPrice}</Text>
      <Button
        title="Go To Session"
        onPress={() =>
          navigation.push('Session', {
            itemId: 'hello',
          })
        }
      />
    </View>
  </View>
);
export default Card;
