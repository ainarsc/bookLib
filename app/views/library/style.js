import {StyleSheet} from 'react-native';
import {COLOR_BACKGROUND} from '../../constants';

const MainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
  },
  row: {
    flex: 3,
    flexDirection: 'row',
    height: 160,
  },
});

export default MainStyle;
