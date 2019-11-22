import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    color: 'red',
    paddingTop: 100,
  },
  page: {
    backgroundColor: 'black',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  panel: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  heading: {
    fontSize: 35,
    paddingTop: 5,
    paddingBottom: 5,
    color: 'grey',
  },
});

export default styles;
