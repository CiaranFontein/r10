import React from 'react';
import {SectionList, Text, TouchableOpacity, Linking} from 'react-native';
import moment from 'moment';
import Session from '../../components/Session';
import RoundButton from '../../components/RoundButton';
import styles from './styles';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';

const Favs = ({navigation, data}) => {
  const {navigate} = navigation;

  if (data.length > 0) {
    return (
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <Session navigation={navigation} session={item} />
        )}
        renderSectionHeader={({section: {title}}) => {
          const time = moment(title).format('hh:mm A');
          return <Text style={styles.time}>{`${time}`}</Text>;
        }}
      />
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() => {
          navigate({routeName: 'Schedule'});
        }}>
        <RoundButton>Add Some Favourites</RoundButton>
      </TouchableOpacity>
    );
  }
};

Favs.propTypes = {
  navigation: PropTypes.object,
  data: PropTypes.array,
};

export default Favs;
