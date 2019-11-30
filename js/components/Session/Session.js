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
  description: PropTypes.string,
};

export default Session;
