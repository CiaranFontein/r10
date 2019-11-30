import {StyleSheet} from 'react-native';
import {colors, typography} from '../../config/styles';
const {black, lightGrey, mediumGrey} = colors;

const styles = StyleSheet.create({
  title: {
    color: black,
    fontSize: typography.baseSize * 1.25,
  },
  location: {
    color: mediumGrey,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderColor: lightGrey,
    borderWidth: 0.5,
  },
  heart: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sessionContainer: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 5,
  },
});

export default styles;
