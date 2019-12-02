import React from 'react';
import {SectionList, Text} from 'react-native';
import moment from 'moment';
import Session from '../../components/Session';
import styles from './styles';
import PropTypes from 'prop-types';

const Favs = ({navigation, data}) => {
  console.log(data);
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
};

Favs.propTypes = {
  navigation: PropTypes.object,
  data: PropTypes.array,
};

export default Favs;
