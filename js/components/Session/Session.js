import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import {FavsContext} from '../../context/FavsContext';

const Session = ({session, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('Session', [session]);
      }}>
      <View style={styles.spaceBetween}>
        <View style={styles.sessionContainer}>
          <Text style={styles.title}>{session.title}</Text>
          <Text style={styles.location}>{session.location}</Text>
        </View>
        <FavsContext.Consumer style={styles.heart}>
          {({favIds}) => {
            if (favIds.includes(session.id)) {
              const isFav = true;
              return (
                <View style={styles.heart}>
                  {isFav ? (
                    <Ionicons
                      style={(style = {padding: 16})}
                      name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
                      size={28}
                      color="red"
                    />
                  ) : null}
                </View>
              );
            }
          }}
        </FavsContext.Consumer>
      </View>
    </TouchableOpacity>
  );
};

Session.propTypes = {
  session: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    location: PropTypes.string,
    speaker: PropTypes.shape({
      bio: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
    }),
    startTime: PropTypes.string,
    title: PropTypes.string,
  }),
  navigation: PropTypes.object,
};

export default Session;
