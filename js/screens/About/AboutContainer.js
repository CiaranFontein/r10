import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import About from './About';
import styles from './styles';
import {QUERY_CONDUCTS} from '../../config/api';
import Loader from '../../components/Loader';

const Conducts = () => {
  const {loading, error, data} = useQuery(QUERY_CONDUCTS, {
    variables: {order: 'order_ASC'},
  });
  if (loading) return <Loader />;
  if (error) return <Text>Error: {error}</Text>;
  if (data) {
    return (
      <View>
        {data.allConducts.map(element => (
          <View key={element.id}>
            <Text style={styles.accordionHeader}>{element.title}</Text>
            <Text>{element.description}</Text>
          </View>
        ))}
      </View>
    );
  }
};
class AboutContainer extends Component {
  render() {
    return <About Conducts={Conducts} />;
  }
}

export default AboutContainer;
