import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR_TEXT_LIGHT, FONT_WEIGHT_NORMAL, FONT_FAMILY} from '../constants';

const DefaultText = ({children}) => {
  return (
    <View>
      <Text style={styles.text}> {children} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY,
    color: COLOR_TEXT_LIGHT,
    fontSize: 18,
    fontWeight: FONT_WEIGHT_NORMAL,
    textAlign: 'justify',
    lineHeight: 23,
  },
});

export default DefaultText;
