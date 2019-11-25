import {StyleSheet} from 'react-native';
import {colors} from '../../config/styles';
const {red} = colors;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    color: red,
    paddingTop: 100,
  },
  Map: {
    margin: 10,
  },
  MapImageView: {
    alignItems: 'center',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  MapImage: {
    height: 60,
    width: 250,
    marginBottom: 20,
    marginTop: 20,
  },
  heading: {
    fontSize: 35,
    paddingTop: 5,
    paddingBottom: 5,
    color: 'grey',
  },
});

export default styles;
