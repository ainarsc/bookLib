import React from 'react';
import {View} from 'react-native';
import BookStyle from './styles';
import DefaultText from '../../components/defaultText';

const Book = () => {
  return (
    <View style={BookStyle.container}>
      <DefaultText>
        {' '}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
        provident natus at impedit recusandae, a magni fuga magnam commodi,
        ipsam eos. Amet ut neque sunt, fugiat deserunt veniam ullam cumque?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellat
        accusamus temporibus consequuntur enim animi delectus nihil sequi fugiat
        velit quasi repellendus dolore laboriosam incidunt maxime, aspernatur
        ratione labore nem{' '}
      </DefaultText>
    </View>
  );
};

export default Book;
