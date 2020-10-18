import {StyleSheet} from 'react-native';
import {COLOR_TEXT_LIGHT, COLOR_BACKGROUND_DARK} from '../../constants';

const BookStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: COLOR_BACKGROUND_DARK,
  },
  items: {
    color: COLOR_TEXT_LIGHT,
  },
  reader: {
    backgroundColor: COLOR_BACKGROUND_DARK,
  },
});

export default BookStyle;
