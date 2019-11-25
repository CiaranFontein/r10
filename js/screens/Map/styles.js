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
  map: {
    height: '100%',
    width: '100%',
  },
});

export default styles;
