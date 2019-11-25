import {StyleSheet} from 'react-native';
import {colors, typography} from '../../config/styles';
const {lightGrey, mediumGrey, black, red, white} = colors;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    color: red,
    paddingTop: 100,
  },
  page: {
    backgroundColor: black,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  panel: {
    backgroundColor: white,
  },
  title: {
    fontSize: typography.baseSize,
    color: white,
    padding: typography.baseSize,
  },
  header: {
    fontSize: typography.baseSize * 2,
    paddingHorizontal: typography.baseSize,
    paddingVertical: typography.baseSize / 2,
    color: black,
  },
  location: {
    color: mediumGrey,
    fontSize: typography.baseSize * 1.25,
  },
  locationFavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: typography.baseSize,
  },
  time: {
    color: red,
    fontSize: typography.baseSize * 1.25,
    paddingHorizontal: typography.baseSize,
    paddingVertical: typography.baseSize / 2,
  },
  description: {
    fontSize: typography.baseSize * 1.5,
    paddingHorizontal: typography.baseSize,
    paddingVertical: typography.baseSize / 2,
    lineHeight: typography.baseSize * 2.25,
  },
  presentedBy: {
    color: mediumGrey,
    fontSize: typography.baseSize * 1.5,
    paddingHorizontal: typography.baseSize,
    paddingVertical: typography.baseSize / 2,
  },
  line: {
    borderBottomColor: lightGrey,
    borderWidth: 0.5,
    width: '90%',
    alignSelf: 'center',
  },
  speakerBox: {
    padding: typography.baseSize,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 80,
    width: 80,
    padding: typography.baseSize,
    borderRadius: 40,
  },
  speakerName: {
    fontSize: typography.baseSize * 1.25,
    padding: typography.baseSize,
  },
});

export default styles;
