import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BookStyle from './style';
import ReadButton from '../../../components/ReadButton';

const Book = () => {
  const navigation = useNavigation();
  return (
    <View style={BookStyle.container}>
      <Text style={BookStyle.items}> Author </Text>
      <Text style={BookStyle.items}> TITLE </Text>
      <Text style={BookStyle.items}> SomeText </Text>
      <ReadButton
        buttonName="Read"
        onPress={() => navigation.navigate('Book')}
      />
    </View>
  );
};

export default Book;
