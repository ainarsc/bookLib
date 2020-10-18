import React from 'react';
import {View} from 'react-native';
import BookStyle from './styles';
import {Epub} from '@ottofeller/epubjs-rn';
import themes from './reader.json';

const Book = () => {
  return (
    <View style={BookStyle.container}>
      <Epub
        src={'https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf'}
        flow={'paginated'}
        themes={themes}
        theme={'dark'}
      />
    </View>
  );
};

export default Book;
