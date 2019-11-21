import {StyleSheet} from 'react-native';
import {colors} from '../../config/styles';
const {black, lightGrey} = colors;

const styles = StyleSheet.create({
  title: {
    color: black,
  },
  location: {
    color: lightGrey,
  },
  sessionContainer: {
    borderWidth: 1,
    borderColor: lightGrey,
  },
});

export default styles;
