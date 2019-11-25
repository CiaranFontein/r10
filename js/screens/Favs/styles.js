import {StyleSheet} from 'react-native';
import {colors, typography} from '../../config/styles';
const {lightGrey, mediumGrey, black, red} = colors;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    color: red,
    paddingTop: 100,
  },
  header: {
    fontSize: typography.baseSize,
    padding: typography.baseSize,
    color: black,
    backgroundColor: lightGrey,
  },
  time: {
    textTransform: 'uppercase',
    fontSize: typography.baseSize,
    padding: typography.baseSize / 2,
    backgroundColor: lightGrey,
  },
});

export default styles;
