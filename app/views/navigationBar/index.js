import React from 'react';
import {View} from 'react-native';
import Heading from '../../components/heading';
import NavStyle from './style';

const NavBar = () => {
  return (
    <View style={NavStyle.container}>
      <Heading> |||| </Heading>
      <Heading> CURRENT VIEW </Heading>
      <Heading> :: </Heading>
    </View>
  );
};

export default NavBar;
