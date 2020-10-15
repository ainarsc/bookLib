import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR_TEXT, FONT_SIZE_LARGE, FONT_WEIGHT_HEAVY} from '../constants';

const Heading = ({children}) => {
  return (
    <View>
      <Text style={styles.text}> {children} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLOR_TEXT,
    fontSize: FONT_SIZE_LARGE,
    fontWeight: FONT_WEIGHT_HEAVY,
  },
});

export default Heading;
