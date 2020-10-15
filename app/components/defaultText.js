import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR_TEXT, FONT_SIZE, FONT_WEIGHT_NORMAL} from '../constants';

const DefaultText = ({children}) => {
  return (
    <View>
      <Text style={styles.text}> {children} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLOR_TEXT,
    fontSize: FONT_SIZE,
    fontWeight: FONT_WEIGHT_NORMAL,
  },
});

export default DefaultText;
