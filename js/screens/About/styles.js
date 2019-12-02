import {StyleSheet} from 'react-native';
import {colors, typography} from '../../config/styles';
const {red, lightGrey, black, lightPurple} = colors;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: red,
    paddingTop: typography.baseSize * 5,
  },
  logo: {
    padding: typography.baseSize,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  line: {
    borderBottomColor: lightGrey,
    borderWidth: 0.5,
    width: '100%',
  },
  about: {
    margin: 10,
  },
  text: {
    fontSize: typography.baseSize * 1.5,
    padding: typography.baseSize,
    fontWeight: '300',
  },
  heading: {
    fontSize: typography.baseSize * 2,
    padding: typography.baseSize,
    color: black,
    fontWeight: '600',
  },
  accordionHeader: {
    color: lightPurple,
    fontSize: typography.baseSize * 1.5,
    padding: typography.baseSize / 2,
  },
  contentContainer: {
    padding: 16,
    alignItems: 'flex-start',
  },
  hundred: {
    width: '100%',
  },
  footer: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    paddingTop: 16,
    paddingBottom: 32,
  },
});

export default styles;
