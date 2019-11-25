import {StyleSheet} from 'react-native';
import {colors, typography} from '../../config/styles';
const {black, red, mediumGrey, white} = colors;
const avatarSize = 160;
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
    borderRadius: typography.baseSize / 2,
    margin: typography.baseSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: typography.baseSize * 2,
    color: black,
    padding: typography.baseSize,
    fontWeight: '600',
  },
  heading: {
    fontSize: typography.baseSize * 2,
    padding: typography.baseSize / 2,
    color: mediumGrey,
  },
  avatar: {
    height: avatarSize,
    width: avatarSize,
    margin: typography.baseSize,
    borderRadius: avatarSize / 2,
  },
  description: {
    fontSize: typography.baseSize * 1.5,
    paddingHorizontal: typography.baseSize,
    paddingVertical: typography.baseSize / 2,
    lineHeight: typography.baseSize * 2.25,
  },
  blackBackground: {
    backgroundColor: black,
  },
  aboutTheSpeaker: {
    color: white,
    padding: typography.baseSize,
    fontSize: typography.baseSize * 1.5,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerBalance: {
    color: black,
  },
  closeIcon: {
    padding: typography.baseSize / 2,
  },
});

export default styles;
