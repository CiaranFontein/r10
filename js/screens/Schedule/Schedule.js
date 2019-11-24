import React from 'react';
import {Text, SectionList} from 'react-native';
import Loader from '../../components/Loader';
import Session from '../../components/Session';
import moment from 'moment';

const Schedule = ({navigation, data}) => {
  return data ? (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <Session navigation={navigation} session={item} />
      )}
      renderSectionHeader={({section: {title}}) => {
        const time = moment(title).format('hh:mm A');
        return <Text>{`${time}`}</Text>;
      }}
    />
  ) : (
    <Loader />
  );
};

export default Schedule;
