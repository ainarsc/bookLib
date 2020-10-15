import React from 'react';
import {View, Text} from 'react-native';
import BookStyle from './style';

const Book = () => {
  return (
    <View style={BookStyle.container}>
      <Text style={BookStyle.items}> Author </Text>
      <Text style={BookStyle.items}> TITLE </Text>
      <Text style={BookStyle.items}> SomeText </Text>
    </View>
  );
};

export default Book;
