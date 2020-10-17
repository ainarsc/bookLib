import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BookStyle from './style';

const Book = () => {
  const navigation = useNavigation();
  return (
    <View style={BookStyle.container}>
      <Text style={BookStyle.items}> Author </Text>
      <Text style={BookStyle.items}> TITLE </Text>
      <Text style={BookStyle.items}> SomeText </Text>
      <Button title="Book" onPress={() => navigation.navigate('Book')} />
    </View>
  );
};

export default Book;
