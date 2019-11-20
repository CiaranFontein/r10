import React from 'react';
import styles from './styles';
import {View, Image, Text, ScrollView, Button} from 'react-native';
import Loader from '../../components/Loader';
import Session from '../../components/Session';

const Schedule = ({navigation, data}) => {
  return data ? (
    <View>
      <Session data={data} />
    </View>
  ) : (
    <Loader />
  );
};

export default Schedule;
