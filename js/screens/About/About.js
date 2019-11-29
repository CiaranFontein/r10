import React, {Component} from 'react';
import {
  LayoutAnimation,
  Text,
  TouchableOpacity,
  View,
  Animated,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import {typography} from '../../config/styles';
const {subHeader, fontMainLight} = typography;
import styles from './styles';
import {requiredSubselectionMessage} from 'graphql/validation/rules/ScalarLeafs';
import PropTypes from 'prop-types';

class CodeOfConduct extends Component {
  state = {
    isCollapsed: true,
    rotateAnimation: new Animated.Value(0),
  };
  resetRotateAnimation() {
    this.setState({
      rotateAnimation: new Animated.Value(0),
    });
  }
  rotate() {
    Animated.timing(this.state.rotateAnimation, {
      duration: 500,
      toValue: 1,
    }).start(animation => {
      if (animation.finished) {
        this.resetRotateAnimation();
      }
    });
  }
  onPress() {
    LayoutAnimation.spring();
    this.rotate();
    this.setState({isCollapsed: !this.state.isCollapsed});
  }
  render() {
    const {conduct} = this.props;
    const {isCollapsed, rotateAnimation} = this.state;
    const angle = rotateAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={styles.hundred}>
        <TouchableOpacity onPress={() => this.onPress()}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Animated.Text
              style={[
                styles.accordionHeader,
                {
                  fontSize: 24,
                  transform: [{rotate: angle}],
                },
              ]}>
              +
            </Animated.Text>
            <Text style={[styles.accordionHeader, {flex: 1}]}>
              {conduct.title}
            </Text>
          </View>
        </TouchableOpacity>
        {!isCollapsed && <Text>{conduct.description}</Text>}
      </View>
    );
  }
}
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

      <Text style={fontMainLight}>© RED Academy 2019</Text>
    </ScrollView>
  ) : null;
};

About.propTypes = {
  CodeOfConducts: PropTypes.func,
};

export default About;
