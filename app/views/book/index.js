import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import BookStyle from './styles';
import {Epub, Streamer} from '@ottofeller/epubjs-rn';
import themes from './reader.json';

const Book = () => {
  const [book, setBook] = useState('');
  const FLOW = 'paginated';
  const BOOK_URL = 'https://s3.amazonaws.com/epubjs/books/moby-dick.epub';
  let streamer = new Streamer({port: '8899', root: 'assets'});
  useEffect(() => {
    streamer
      .start(8899) // Runs the server
      .then(() => streamer.get(BOOK_URL))
      .then((modifiedPath) => setBook(modifiedPath));
    return () => streamer.kill();
  }, [BOOK_URL, book, streamer]);

  return (
    <View style={BookStyle.container}>
      <Epub src={book} flow={FLOW} themes={themes} theme={'dark'} />
    </View>
  );
};

export default Book;
