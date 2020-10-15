import React from 'react';
import {View, ScrollView, Text, StatusBar} from 'react-native';
import NavBar from '../navigationBar';

const index = () => {
  return (
    <>
      <StatusBar backgroundColor="#f5d061" />
      <ScrollView>
        <NavBar />
        <View>
          <Text> FOO Main FOO</Text>
          <Text> FOO Main FOO</Text>
          <Text> FOO Main FOO</Text>
          <Text> FOO Main FOO</Text>
          <Text> FOO Main FOO</Text>
          <Text> FOO Main FOO</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default index;
