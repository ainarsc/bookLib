import React from 'react';
import {View, ScrollView, StatusBar} from 'react-native';
// import NavBar from '../navigationBar';
import Book from './book';
import MainStyle from './style';

const Main = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor="#f5d061" />
      {/* <NavBar /> */}
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

export default Main;
