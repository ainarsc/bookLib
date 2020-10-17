import React from 'react';
import {View, ScrollView, StatusBar} from 'react-native';
import Book from './book';
import MainStyle from './style';

const Library = () => {
  return (
    <>
      <StatusBar backgroundColor="#f5d061" />
      <ScrollView style={MainStyle.container}>
        <View style={MainStyle.row}>
          <Book />
          <Book />
          <Book />
        </View>
        <View style={MainStyle.row}>
          <Book />
          <Book />
          <Book />
        </View>
        <View style={MainStyle.row}>
          <Book />
          <Book />
          <Book />
        </View>
        <View style={MainStyle.row}>
          <Book />
          <Book />
          <Book />
        </View>
        <View style={MainStyle.row}>
          <Book />
          <Book />
          <Book />
        </View>
      </ScrollView>
    </>
  );
};

export default Library;
