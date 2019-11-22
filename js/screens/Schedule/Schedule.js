import React from 'react';
import styles from './styles';
import {Text, SectionList} from 'react-native';
import Loader from '../../components/Loader';
import Session from '../../components/Session';

const Schedule = ({navigation, data}) => {
  return data ? (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <Session navigation={navigation} session={item} />
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  ) : (
    <Loader />
  );
};

export default Schedule;
