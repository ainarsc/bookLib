import React from 'react';
import {Button} from 'react-native-elements';
import {COLOR_TEXT_LIGHT} from '../constants';

const SettingsButton = (props) => {
  return (
    <Button
      title={props.buttonName}
      type="clear"
      titleStyle={{color: COLOR_TEXT_LIGHT}}
    />
  );
};

export default SettingsButton;
