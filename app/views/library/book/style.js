import {StyleSheet} from 'react-native';
import {COLOR_SECONDARY, COLOR_TEXT} from '../../../constants';

const BookStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: COLOR_SECONDARY,
    borderRadius: 3,
  },
  items: {
    color: COLOR_TEXT,
  },
});

export default BookStyle;
