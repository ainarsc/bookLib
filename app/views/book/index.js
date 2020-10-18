import React from 'react';
import {View} from 'react-native';
import BookStyle from './styles';
import {Epub} from '@ottofeller/epubjs-rn';
import themes from './reader.json';

const Book = () => {
  const Dick = 'https://s3.amazonaws.com/epubjs/books/moby-dick.epub';
  return (
    <View style={BookStyle.container}>
      <Epub flow="paginated" width="100%" height="100%" src={Dick} />
    </View>
  );
};

export default Book;
