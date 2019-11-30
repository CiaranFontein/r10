import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import CodeOfConduct from '../../components/CodeOfConduct';
import Loader from '../../components/Loader';

const About = ({data}) => {
  const {allConducts} = data;
  return data ? (
    <ScrollView
      style={styles.default}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.logo}>
        <Image source={require('../../assets/r10_logo.png')} />
      </View>
      <View style={styles.line}></View>
      <Text style={styles.text}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.heading}>Date &amp; Venue</Text>
      <Text style={styles.text}>
        The R10 conference will take place on Tuesday, June 27, 2019 in
        Vancouver, BC.
      </Text>
      <Text style={styles.heading}>Code of Conduct</Text>

      {allConducts.map(conduct => (
        <CodeOfConduct conduct={conduct} key={conduct.id} />
      ))}

      <Text style={styles.footer}>© RED Academy 2019</Text>
    </ScrollView>
  ) : (
    <Loader />
  );
};

About.propTypes = {
  CodeOfConducts: PropTypes.func,
};

export default About;
