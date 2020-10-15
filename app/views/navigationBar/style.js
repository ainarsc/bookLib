import {StyleSheet} from 'react-native';
import {FONT_FAMILY, COLOR_TEXT, FONT_SIZE} from '../../constants';

const NavStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#111e6c',
  },
  items: {
    color: COLOR_TEXT,
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE,
  },
});

export default NavStyle;
