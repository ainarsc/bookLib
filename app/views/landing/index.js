import React from 'react';
import {View} from 'react-native';
import LandingStyle from './style';
import Logo from '../../../assets/logo.svg';

const Landing = () => (
  <View style={LandingStyle.container}>
    <Logo fill="#f5d061" width={100} height={100} />
  </View>
);

export default Landing;
