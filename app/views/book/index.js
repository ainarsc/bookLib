import React from 'react';
import {View} from 'react-native';
import BookStyle from './styles';
import DefaultText from '../../components/defaultText';

const Book = () => {
  return (
    <View style={BookStyle.container}>
      <DefaultText>
        {' '}
        “There are many books full of interviews. This is different, because I
        don’t view myself as an interviewer. I view myself as an experimenter.
        If I can’t test something or replicate results in the messy reality of
        everyday life, I’m not interested. Everything in these pages has been
        vetted, explored, and applied to my own life in some fashion. I’ve used
        dozens of these tactics and philosophies in high-stakes negotiations,
        high-risk environments, or large business dealings. The lessons have
        made me millions of dollars and saved me years of wasted effort and
        frustration. They work when you need them most. Some applications are
        obvious at first glance, while others are subtle and will provoke a
        “Holy shit, now I get it!” realization weeks later, while you’re
        daydreaming in the shower or about to fall asleep.” Excerpt From:
        Timothy Ferriss. “Tools of Titans”. Apple Books.{' '}
      </DefaultText>
    </View>
  );
};

export default Book;
