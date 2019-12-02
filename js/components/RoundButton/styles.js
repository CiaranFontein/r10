import {StyleSheet} from 'react-native';
import {typography, colors} from '../../config/styles';
const {baseSize, subHeader} = typography;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginTop: baseSize * 2,
    borderRadius: 50,
    marginBottom: 24,
  },
  buttonText: {
    ...subHeader,
    color: colors.white,
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: baseSize * 2,
  },
});

export default styles;
