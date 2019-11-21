import {StyleSheet} from 'react-native';
import {colors, typography} from '../../config/styles';
const {lightGrey, black, red} = colors;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    color: red,
    paddingTop: 100,
  },
  header: {
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5,
    color: black,
    backgroundColor: lightGrey,
  },
});

export default styles;
